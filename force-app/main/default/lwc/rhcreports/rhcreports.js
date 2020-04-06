import { LightningElement, api} from 'lwc';

import getReportNames from '@salesforce/apex/AA_RHCReportController.getReportNames';
import getAccounts from '@salesforce/apex/AA_RHCReportController.getAccounts';
import getADOs from '@salesforce/apex/AA_RHCReportController.getADOs';
import getRVPs from '@salesforce/apex/AA_RHCReportController.getRVPs';
import getDVPs from '@salesforce/apex/AA_RHCReportController.getDVPs';
import getReportTable from '@salesforce/apex/AA_RHCReportController.getReportTable';
import getDVPTeams from '@salesforce/apex/AA_RHCReportController.getDVPTeams';
import getRVPTeams from '@salesforce/apex/AA_RHCReportController.getRVPTeams';
import getADOTeams from '@salesforce/apex/AA_RHCReportController.getADOTeams';
import getFacility from '@salesforce/apex/AA_RHCReportController.getFacility';
import getDVPActivities from '@salesforce/apex/AA_RHCReportController.getDVPActivities';
import getRVPActivities from '@salesforce/apex/AA_RHCReportController.getRVPActivities';
import getADOActivities from '@salesforce/apex/AA_RHCReportController.getADOActivities';
import getAllRHBActive from '@salesforce/apex/AA_RHCReportController.getAllRHBActive';
import getNPSTasks from '@salesforce/apex/AA_RHCReportController.getNPSTasks';
import getPDPMTasks from '@salesforce/apex/AA_RHCReportController.getPDPMTasks';

export default class Rhcreports extends LightningElement {

    @api selReports = [];
    @api selAccounts = [];
    @api paginationList = [];
    @api tableData = [];
    @api pageSize = 20;
    @api pageSize2 = 30;
    @api totalSize;
    @api start;
    @api end;
    @api facility;
    @api dvpList = [];
    @api paginationListDVP = [];
    @api rvpList = [];
    @api paginationListRVP = [];
    @api adoList = [];
    @api paginationListADO = [];
    @api report1 = false;
    @api report2 = false;
    @api report3 = false;
    @api report4 = false;
    @api dvpListAct = [];
    @api paginationListDVPAct = [];
    @api rvpListAct = [];
    @api paginationListRVPAct = [];
    @api adoListAct = [];
    @api paginationListADOAct = [];
    @api letterStart;
    @api letterEnd;
    @api adoListChoose = [];
    @api rvpListChoose = [];
    @api dvpListChoose = [];
    
    @api showAlpha = false;
    
    @api aList = [];
    @api bList = [];
    @api cList = [];
    @api dList = [];
    @api eList = [];
    @api fList = [];
    @api gList = [];
    @api hList = [];
    @api iList = [];
    @api jList = [];
    @api kList = [];
    @api lList = [];
    @api mList = [];
    @api nList = [];
    @api oList = [];
    @api pList = [];
    @api qList = [];
    @api rList = [];
    @api sList = [];
    @api tList = [];
    @api uList = [];
    @api vList = [];
    @api wList = [];
    @api xList = [];
    @api yList = [];
    @api zList = [];
    @api objectRecords = [];
    @api processingFinished = false;
    
    @api accountTeamAndADO = [];
    @api accountTeamAndADODownloadList = [];
    
    @api NPSActivityList = [];
    
    @api accountDownloadPieceList = [];
    
    @api exportCapture = [];
    
    @api sortAscContact = false;
    
    @api sortFieldContact;
    @api sortFieldDVP;
    @api sortFieldRVP;
    @api sortFieldADO;
    
    @api selectedADO = [];
    @api selectedRVP = [];
    @api selectedDVP = [];
    
    @api sortAscDVP = false;
    @api sortAscRVP = false;
    @api sortAscADO = false;
    @api selectedADOList = [];
    @api selectedRVPList = [];
    @api selectedDVPList = [];
    
    @api showExtraFilters = false;
    
    @api Spinner = false;

    @api showFacility = false;
    @api showPageListDVPAct = false;
    @api showPageListRVPAct = false;
    @api showPageListADOAct = false;
    @api showCon = false;
    @api showConADO = false;
    @api showConDVP = false;
    @api showConRVP = false;
    @api showConCTeam = false;
    @api showAcc = false;
    @api showConTasks = false;
    @api accSelectDisabled = false;
    @api selectedReport;
    @api selectedAccount;
    @api showPaginationList = false;
    @api showPaginationListADO = false;
    @api showPaginationListDVP = false;
    @api showPaginationListRVP = false;

    @api nextButtonDisabled = false;
    @api prevButtonDisabled = false;

    connectedCallback(){
        this.nextButtonDisabled = true;
        this.prevButtonDisabled = true;
        this.accSelectDisabled = true;
        this.Spinner = true;
        getReportNames().then(
            result=>{
                var stringItems = result;
                this.selReports = stringItems;
                getAccounts().then(
                    result=>{
                        var stringItems = result;
                        this.selAccounts = stringItems;
                        getADOs().then(
                            result=>{
                                var stringItems = result;
                                var options = [];
                                for(var i = 0; i < stringItems.length; i++){ 
                                    options.push({ value: stringItems[i], label: stringItems[i]});
                                    }
                                this.adoListChoose = options;
                                getRVPs().then(
                                    result=>{
                                        var stringItems = result;
                                        var options = [];
                                        for(var i = 0; i < stringItems.length; i++){ 
                                            options.push({ value: stringItems[i], label: stringItems[i]});
                                            }
                                        this.rvpListChoose = options;
                                        getDVPs().then(
                                            result=>{
                                                var stringItems = result;
                                                var options = [];
                                                for(var i = 0; i < stringItems.length; i++){ 
                                                    options.push({ value: stringItems[i], label: stringItems[i]});
                                                    }
                                                this.dvpListChoose = options;
                                                this.Spinner = false;
                                                }
                                            )
                                        .catch(
                                            error=>{
                                                console.log('Error getting DVPs: ' + error.message);
                                                this.Spinner = false;
                                                }
                                            );
                                        }
                                    )
                                .catch(
                                    error=>{
                                        console.log('Error getting RVPs: ' + error.message);
                                        this.Spinner = false;
                                        }
                                    );
                                }
                            )
                        .catch(
                            error=>{
                                console.log('Error getting ADOs: ' + error.message);
                                this.Spinner = false;
                                }
                            );
                        }
                    )
                .catch(
                    error=>{
                        console.log('Error getting accounts: ' + error.message);
                        this.Spinner = false;
                        }
                    );
                }
            )
        .catch(
            error=>{
                console.log('Error getting reports: ' + error.message);
                this.Spinner = false;
                }
            );
        }
    
    getFormInputChange(event){
        var name = event.target.name;
        if(name === 'InputSelectAccount'){
            this.selectedAccount = event.target.value;
            }

        }

    handleADOChange(event){
        var selectedOptionsList = event.target.value;
        this.selectedADO = selectedOptionsList;
    	}
    
    handleRVPChange(event){
        var selectedOptionsList = event.target.value;
        this.selectedRVP = selectedOptionsList;
    	}
    
    handleDVPChange(event){
        var selectedOptionsList = event.target.value;
        this.selectedDVP = selectedOptionsList;
    	}
    
    onReportChange(event){
        var report = event.target.value;
        this.accSelectDisabled = true;
        console.log('Selected Report: ' + report);
        this.selectedReport = report;
        this.showAlpha = false;
        this.report1 = false;
        this.report2 = false;
        this.report3 = false;
        this.report4 = false;
        this.showExtraFilters = false;
        this.showFacility = false;
        if(report === 'Contacts Reporting'){
            this.report1 = true;
            this.accSelectDisabled = false;
            }
        else if(report === 'Activity Reporting'){
            this.report2 = true;
            this.accSelectDisabled = false;
            }
        else if(report === 'NPS Activity Report'){
            this.showExtraFilters = true;
            this.showAlpha = true;
            this.report4 = true;
            this.getAllNPSPDPMActive();
            try{
            var startLetter = 'A';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'B';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'C';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'D';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'E';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'F';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'G';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'H';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'I';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'J';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'K';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'L';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'M';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'N';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'O';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'P';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'Q';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'R';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'S';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'T';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'U';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'V';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'W';
            this.getAllNPSPDPMRows(startLetter);
            }
            catch(err){
                console.log('Error getting allNPSPDPMRows: ' + err.message);
                this.Spinner = false;
                }
        	}
        else if(report.includes("PDPM")){
            this.showAlpha = true;
            this.report4 = true;
            this.getAllNPSPDPMActive();
            this.showExtraFilters = true;
        	
            var startLetter = 'A';
            this.getAllNPSPDPMRows(startLetter)
            startLetter = 'B';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'C';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'D';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'E';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'F';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'G';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'H';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'I';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'J';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'K';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'L';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'M';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'N';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'O';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'P';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'Q';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'R';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'S';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'T';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'U';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'V';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'W';
            this.getAllNPSPDPMRows(startLetter);
        	}
        else if(report === 'All Accounts Reporting'){
            this.showAlpha = true;
            this.report3 = true;
            this.showExtraFilters = true;
            try{
            var startLetter = 'A';
            this.getAllRHBRows(startLetter);
            startLetter = 'B';
            this.getAllRHBRows(startLetter);
            startLetter = 'C';
            this.getAllRHBRows(startLetter);
            startLetter = 'D';
            this.getAllRHBRows(startLetter);
            startLetter = 'E';
            this.getAllRHBRows(startLetter);
            startLetter = 'F';
            this.getAllRHBRows(startLetter);
            startLetter = 'G';
            this.getAllRHBRows(startLetter);
            startLetter = 'H';
            this.getAllRHBRows(startLetter);
            startLetter = 'I';
            this.getAllRHBRows(startLetter);
            startLetter = 'J';
            this.getAllRHBRows(startLetter);
            startLetter = 'K';
            this.getAllRHBRows(startLetter);
            startLetter = 'L';
            this.getAllRHBRows(startLetter);
            startLetter = 'M';
            this.getAllRHBRows(startLetter);
            startLetter = 'N';
            this.getAllRHBRows(startLetter);
            startLetter = 'O';
            this.getAllRHBRows(startLetter);
            startLetter = 'P';
            this.getAllRHBRows(startLetter);
            startLetter = 'Q';
            this.getAllRHBRows(startLetter);
            startLetter = 'R';
            this.getAllRHBRows(startLetter);
            startLetter = 'S';
            this.getAllRHBRows(startLetter);
            startLetter = 'T';
            this.getAllRHBRows(startLetter);
            startLetter = 'U';
            this.getAllRHBRows(startLetter);
            startLetter = 'V';
            this.getAllRHBRows(startLetter);
            startLetter = 'W';
            this.getAllRHBRows(startLetter);
            }
            catch(err){
                console.log('Error getting AllRHBRows: ' + err.message);
                this.Spinner = false;
                }
            }

        }
    
    runReports(){
        var report = this.selectedReport;
        console.log('Selected Report: ' + this.selectedReport);
        this.showAlpha = false;
        this.showExtraFilters = false;
        this.report1 = false;
        this.report2 = false;
        this.report3 = false;
        this.report4 = false;
        if(report === 'Contacts Reporting'){
            this.getFacility();
            this.getDVPTeams();
        	this.getRVPTeams();
        	this.getADOTeams();
            this.runAccountReport();
            this.report1 = true;
            }
        else if(report === 'Activity Reporting'){
            this.getFacility();
            this.report2 = true;
            this.getDVPActivities();
            this.getRVPActivities();
            this.getADOActivities();
        	}
        else if(report === 'NPS Activity Report'){
            this.showAlpha = true;
            this.report4 = true;
            this.showExtraFilters = true;
            this.getAllNPSPDPMActive();
            try{
            var startLetter = 'A';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'B';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'C';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'D';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'E';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'F';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'G';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'H';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'I';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'J';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'K';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'L';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'M';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'N';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'O';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'P';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'Q';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'R';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'S';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'T';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'U';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'V';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'W';
            this.getAllNPSPDPMRows(startLetter);
            }
            catch(err){
                console.log('Error fetching NPSPDPM rows: ' + err.message);
                this.Spinner = false;
                }
        	}
        else if(report.includes("PDPM")){
            this.showAlpha = true;
            this.report4 = true;
            this.getAllNPSPDPMActive();
            this.showExtraFilters = true;
        	try{
            var startLetter = 'A';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'B';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'C';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'D';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'E';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'F';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'G';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'H';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'I';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'J';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'K';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'L';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'M';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'N';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'O';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'P';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'Q';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'R';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'S';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'T';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'U';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'V';
            this.getAllNPSPDPMRows(startLetter);
            startLetter = 'W';
            this.getAllNPSPDPMRows(startLetter);
            }
            catch(err){
                console.log('Error getting NPSPDPMRows: ' + err.message);
                this.Spinner = false;
                }
        	}
        else if(report === 'All Accounts Reporting'){
            this.showAlpha = true;
            this.report3 = true;
            this.getAllRHBAct();
        	try{
            var startLetter = 'A';
            this.getAllRHBRows(startLetter);
            startLetter = 'B';
            this.getAllRHBRows(startLetter);
            startLetter = 'C';
            this.getAllRHBRows(startLetter);
            startLetter = 'D';
            this.getAllRHBRows(startLetter);
            startLetter = 'E';
            this.getAllRHBRows(startLetter);
            startLetter = 'F';
            this.getAllRHBRows(startLetter);
            startLetter = 'G';
            this.getAllRHBRows(startLetter);
            startLetter = 'H';
            this.getAllRHBRows(startLetter);
            startLetter = 'I';
            this.getAllRHBRows(startLetter);
            startLetter = 'J';
            this.getAllRHBRows(startLetter);
            startLetter = 'K';
            this.getAllRHBRows(startLetter);
            startLetter = 'L';
            this.getAllRHBRows(startLetter);
            startLetter = 'M';
            this.getAllRHBRows(startLetter);
            startLetter = 'N';
            this.getAllRHBRows(startLetter);
            startLetter = 'O';
            this.getAllRHBRows(startLetter);
            startLetter = 'P';
            this.getAllRHBRows(startLetter);
            startLetter = 'Q';
            this.getAllRHBRows(startLetter);
            startLetter = 'R';
            this.getAllRHBRows(startLetter);
            startLetter = 'S';
            this.getAllRHBRows(startLetter);
            startLetter = 'T';
            this.getAllRHBRows(startLetter);
            startLetter = 'U';
            this.getAllRHBRows(startLetter);
            startLetter = 'V';
            this.getAllRHBRows(startLetter);
            startLetter = 'W';
            this.getAllRHBRows(startLetter);
            }
            catch(err){
                console.log('Error fetching lists: ' + err.message);
                this.Spinner = false;
                }
        	}
        }
    
        
    onTabChangeA(){
        this.letterStart = "a";
        this.letterEnd = "b";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}
        }
    
    onTabChangeB(){
        this.letterStart = "b";
        this.letterEnd = "c";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeC(){
        this.letterStart = "c";
        this.letterEnd = "d";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeD(){
        this.letterStart = "d";
        this.letterEnd = "e";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeE(){
        this.letterStart = "e";
        this.letterEnd = "f";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeF(){
        this.letterStart = "f";
        this.letterEnd = "g";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeG(){
        this.letterStart = "g";
        this.letterEnd = "h";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeH(){
        this.letterStart = "h";
        this.letterEnd = "i";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeI(){
        this.letterStart = "i";
        this.letterEnd = "j";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeJ(){
        this.letterStart = "j";
        this.letterEnd = "k";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeK(){
        this.letterStart = "k";
        this.letterEnd = "l";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeL(){
        this.letterStart = "l";
        this.letterEnd = "m";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeM(){
        this.letterStart = "m";
        this.letterEnd = "n";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeN(){
        this.letterStart = "n";
        this.letterEnd = "o";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeO(){
        this.letterStart = "o";
        this.letterEnd = "p";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}           
    	}
    
    onTabChangeP(){
        this.letterStart = "p";
        this.letterEnd = "q";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeQ(){
        this.letterStart = "q";
        this.letterEnd = "r";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeR(){
        this.letterStart = "r";
        this.letterEnd = "s";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeS(){
        this.letterStart = "s";
        this.letterEnd = "t";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeT(){
        this.letterStart = "t";
        this.letterEnd = "u";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeU(){
        this.letterStart = "u";
        this.letterEnd = "v";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}

    onTabChangeV(){
        this.letterStart = "v";
        this.letterEnd = "w";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeW(){
        this.letterStart = "w";
        this.letterEnd = "x";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeX(){
        this.letterStart = "x";
        this.letterEnd = "y";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeY(){
        this.letterStart = "y";
        this.letterEnd = "z";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    onTabChangeZ(){
        this.letterStart = "z";
        this.letterEnd = "zz";
        var report = this.selectedReport;
        if(report === 'All Accounts Reporting'){
        	this.getAllRHBAct();               
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            this.getAllNPSPDPMActive();
        	}            
    	}
    
    downloadCsvAllAccount(){
            var stockData = [];
            this.objectRecords = [];
            var ready = this.processingFinished;
            if(ready === true){
                this.Spinner = true;
                var a = this.aList;
                var b = this.bList;
                var c = this.cList;
                var d = this.dList;
                var e = this.eList;
                var f = this.fList;
                var g = this.gList;
                var h = this.hList;
                var i = this.iList;
                var j = this.jList;
                var k = this.kList;
                var l = this.lList;
                var m = this.mList;
                var n = this.nList;
                var o = this.oList;
                var p = this.pList;
                var q = this.qList;
                var r = this.rList;
                var s = this.sList;
                var t = this.tList;
                var u = this.uList;
                var v = this.vList;
                var w = this.wList;
                var x = this.xList;
                var y = this.yList;
                var z = this.zList;
            
                if(a !== undefined){
            for(var aa=0; aa< a.length; aa++){
                 	stockData.push(a[aa]);    
                    }
                    }
                if(b !== undefined){
            for(var bb=0; bb< b.length; bb++){
                    stockData.push(b[bb]);
                    }
                }
                if(c !== undefined){
                for(var cc=0; cc< c.length; cc++){
                    stockData.push(c[cc]);
                    }
                }
                if(d !== undefined){
                for(var dd=0; dd< d.length; dd++){
                    stockData.push(d[dd]);
                    }
                }
                if(e !== undefined){
                for(var ee=0; ee< e.length; ee++){
                    stockData.push(e[ee]);
                    }
                }
                if(f !== undefined){
                for(var ff=0; ff< f.length; ff++){
                    stockData.push(f[ff]);
                    }
                }
                if(g !== undefined){
                for(var gg=0; gg< g.length; gg++){
                    stockData.push(g[gg]);    
                    }
                }
                if(h !== undefined){
                for(var hh=0; hh< h.length; hh++){
                    stockData.push(h[hh]);
                    }
                }
                if(i !== undefined){
                for(var ii=0; ii< i.length; ii++){
                    stockData.push(i[ii]);
                    }
                }
                if(j !== undefined){
                for(var jj=0; jj< j.length; jj++){
                    stockData.push(j[jj]);
                    }
                }
                if(k !== undefined){
                for(var kk=0; kk< k.length; kk++){
                    stockData.push(k[kk]);
                    }
                }
                if(l !== undefined){
                for(var ll=0; ll< l.length; ll++){
                    stockData.push(l[ll]);
                    }
                }
                if(m !== undefined){
                for(var mm=0; mm< m.length; mm++){
                    stockData.push(m[mm]);
                    }
                }
                if(n !== undefined){
                for(var nn=0; nn< n.length; nn++){
                    stockData.push(n[nn]);
                    }
                }
                if(o !== undefined){
                for(var oo=0; oo< o.length; oo++){
                    stockData.push(o[oo]);
                    }
                }
                if(p !== undefined){
                for(var pp=0; pp< p.length; pp++){
                    stockData.push(p[pp]);
                    }
                }
                if(q !== undefined){
                for(var qq=0; qq< q.length; qq++){
                    stockData.push(q[qq]);
                    }
                }
                if(r !== undefined){
                for(var rr=0; rr< r.length; rr++){
                    stockData.push(r[rr]);
                    }
                }
                if(s !== undefined){
                for(var ss=0; ss< s.length; ss++){
                    stockData.push(s[ss]);
                    }
                }
                if(t !== undefined){
                for(var tt=0; tt< t.length; tt++){
                    stockData.push(t[tt]);
                    }
                }
                if(u !== undefined){
                for(var uu=0; uu< u.length; uu++){
                    stockData.push(u[uu]);
                    }
                }
                if(v !== undefined){
                for(var vv=0; vv< v.length; vv++){
                    stockData.push(v[vv]);
                    }
                }
                if(w !== undefined){
                for(var ww=0; ww< w.length; ww++){
                    stockData.push(w[ww]);
                    }
                }
                if(x !== undefined){
                for(var xx=0; xx< x.length; xx++){
                    stockData.push(x[xx]);
                    }
                }
                if(y !== undefined){
                for(var yy=0; yy< y.length; yy++){
                    stockData.push(y[yy]);
                    }
                }
                if(z !== undefined){
                for(var zz=0; zz< z.length; zz++){
                    stockData.push(z[zz]);
                    }
                }
                var report = this.selectedReport;
                this.objectRecords = stockData;
                var csv;
                
                if(report === 'All Accounts Reporting'){
                    csv = this.convertArrayOfObjectsToCSVAllAccount();
                    }
                else if(report === 'NPS Activity Report' || report.includes("PDPM")){
                    csv = this.convertArrayOfObjectsToCSVNPS();
                    }
            if(csv == null || csv == undefined){
                return;
                }
            else{
                if(navigator.msSaveBlob){ // IE 10+ 
                   navigator.msSaveBlob(new Blob([csv], { type: 'text/csv;charset=utf-8;' }), "AccountTeamData.csv"); 
                   }
                else{
                    var hiddenElement = document.createElement('a');
                    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
                    hiddenElement.target = '_self'; // 
                    hiddenElement.download = 'AccountTeamData.csv';
                    document.body.appendChild(hiddenElement);
                    hiddenElement.click();
                    }
                this.Spinner = false;
                }
            }
            else{
                this.Spinner = false;
                alert("Data Compliation of the report is not yet complete.  Please wait a few moments and then try your request again.");
                }
        }

        getDVPTeams(){
            this.dvpList = null;
            this.paginationListDVP = null;
            var pageSize = this.pageSize;
            getDVPTeams({
                        "accName" : this.selectedAccount
                        }).then(
                            result=>{
                                var paginationList = [];
                                    this.start = 0;
                                    this.end = pageSize-1;
                                    var loopSize;
                                    if(result.length > pageSize){
                                        loopSize = pageSize;
                                        }
                                    else{
                                        loopSize = result.length;
                                        }
                                    for(var i=0; i< loopSize; i++){
                                        paginationList.push(result[i]);
                                        }
                                this.paginationListDVP = paginationList;
                                if(this.paginationListDVP.length > 0){
                                    this.showPaginationListDVP = true;
                                    }
                                this.dvpList = result;
                                }
                            )
                        .catch(
                            error=>{
                                console.log('Get DVP Teams error: ' + error.message);
                                this.Spinner = false;
                            }
                        );
            }
        
        getDVPActivities(){
            var pageSize = this.pageSize2;
            getDVPActivities({
                                "accName" : this.selectedAccount
                            })
                            .then(
                                result=>{
                                    var paginationList = [];
                                    this.start = 0;
                                    this.end = pageSize-1;
                                    var loopSize;
                                    if(result.length > pageSize){
                                        loopSize = pageSize;
                                        }
                                    else{
                                        loopSize = result.length;
                                        }
                                    for(var i=0; i< loopSize; i++){
                                        paginationList.push(result[i]);
                                        }
                                    this.paginationListDVPAct = paginationList;
                                    this.dvpListAct = result;
                                    if(this.paginationListDVPAct.length > 0){
                                        this.showPageListDVPAct = true;
                                        }
                                    }
                                )
                            .catch(
                                    error=>{
                                        console.log('Error getting DVP Activities: ' + error.message);
                                        this.Spinner = false;
                                    }
                            );
            }
        
        getRVPTeams(){
            this.rvpList = null;
            this.paginationListRVP = null;
            var pageSize = this.pageSize;
            getRVPTeams({
                        "accName" : this.selectedAccount
                        }).then(
                            result=>{
                                var paginationList = [];
                                    this.start = 0;
                                    this.end = pageSize-1;
                                    var loopSize;
                                    if(result.length > pageSize){
                                        loopSize = pageSize;
                                        }
                                    else{
                                        loopSize = result.length;
                                        }
                                    for(var i=0; i< loopSize; i++){
                                        paginationList.push(result[i]);
                                        }
                                this.paginationListRVP =  paginationList;
                                if(this.paginationListRVP.length > 0){
                                    this.showPaginationListRVP = true;
                                    }
                                this.rvpList = result;
                                }
                        )
                    .catch(
                        error=>{
                            console.log('Error getting RVP Teams: ' + error.message);
                            this.Spinner = false;
                        }
                    );
            }
        
        getRVPActivities(){
            this.rvpListAct = null;
            this.paginationListRVPAct = null;
            var pageSize = this.pageSize2;
            getRVPActivities({
                            "accName" : this.selectedAccount
                            })
                        .then(
                            result=>{
                                var paginationList = [];
                                    this.start = 0;
                                    this.end = pageSize-1;
                                    var loopSize;
                                    if(result.length > pageSize){
                                        loopSize = pageSize;
                                        }
                                    else{
                                        loopSize = result.length;
                                        }
                                    for(var i=0; i< loopSize; i++){
                                        paginationList.push(result[i]);
                                        }
                                this.paginationListRVPAct = paginationList;
                                this.rvpListAct = result;
                                if(this.paginationListRVPAct.length > 0){
                                    this.showPageListRVPAct = true;
                                    }
                                }
                            )
                        .catch(
                            error=>{
                                console.log('Error in getting RVP Activities: ' + error.message);
                                this.Spinner = false;
                                }
                            );
            }
        
        getADOTeams(){
            this.adoList = null;
            this.paginationListADO = null;
            var pageSize = this.pageSize;
            getADOTeams({
                "accName" : this.selectedAccount
                }).then(
                    result=>{
                        var paginationList = [];
                                    this.start = 0;
                                    this.end = pageSize-1;
                                    var loopSize;
                                    if(result.length > pageSize){
                                        loopSize = pageSize;
                                        }
                                    else{
                                        loopSize = result.length;
                                        }
                                    for(var i=0; i< loopSize; i++){
                                        paginationList.push(result[i]);
                                        }
                    this.paginationListADO = paginationList;
                    if(this.paginationListADO.length > 0){
                        this.showPaginationListADO = true;
                        }
                    this.adoList = result;
                    }
                ).catch(
                    error=>{
                        console.log('Error getting ADO Teams: ' + error.message);
                        this.Spinner = false;
                    }
                );
            }
        
        getADOActivities(){
            this.adoListAct = null;
            this.paginationListADOAct = null;
            var pageSize = this.pageSize2;
            getADOActivities({
                            "accName" : this.selectedAccount
                            })
                            .then(
                                result=>{
                                    var paginationList = [];
                                    this.start = 0;
                                    this.end = pageSize-1;
                                    var loopSize;
                                    if(result.length > pageSize){
                                        loopSize = pageSize;
                                        }
                                    else{
                                        loopSize = result.length;
                                        }
                                    for(var i=0; i< loopSize; i++){
                                        paginationList.push(result[i]);
                                        }
                                this.paginationListADOAct = paginationList;
                                this.adoListAct = result;
                                if(this.paginationListADOAct.length > 0){
                                    this.showPageListADOAct = true;
                                    }
                                }
                            )
                        .catch(
                            error=>{
                                console.log('Error getting ADO Activities: ' + error.message);
                                this.Spinner = false;
                            }
                        );
            }
        
        getFacility(){
            getFacility({
                        "accName" : this.selectedAccount
                        })
                        .then(
                            result=>{
                                this.facility = result;
                                this.showFacility = true;
                            }
                        )
                        .catch(
                            error=>{
                                console.log('Error getting facility: ' + error.message);
                                this.Spinner = false;
                            }
                        );
            }
        
        runAccountReport(){
            this.Spinner = true;
            this.tableData = null;
            this.paginationList = null;
            var pageSize = this.pageSize;
            getReportTable({
                            "selReport" : this.selectedReport,
                            "accName" : this.selectedAccount
                            })
                    .then(
                        result=>{
                            var paginationList = [];
                            this.start = 0;
                            this.end = pageSize-1;
                            var loopSize;
                            if(result.length > pageSize){
                                loopSize = pageSize;
                                this.nextButtonDisabled = false;
                                this.prevButtonDisabled = false;
                                }
                            else{
                                loopSize = result.length;
                                }
                            for(var i=0; i< loopSize; i++){
                                paginationList.push(result[i]);
                                }
                            this.paginationList = paginationList;
                            if(this.paginationList.length > 0){
                                this.showPaginationList = true;
                                }
                            this.tableData = result;
                            this.Spinner = false;
                        }
                    )
                    .catch(
                        error=>{
                            console.log('Error getting report: ' + error.message);
                            this.Spinner = false;
                        }
                    );
            }
        

            
        
        getAllRHBAct(){
            this.Spinner = true;
            this.accountTeamAndADO = null;
                getAllRHBActive({
                                "letterStart" : this.letterStart,
                                "letterEnd" : this.letterEnd,
                                "ADO_Filter" : this.selectedADO,
                                "RVP_Filter" : this.selectedRVP,
                                "DVP_Filter" : this.selectedDVP
                                })
                    .then(
                        result=>{
                            var repList = result;
                            this.accountTeamAndADO = repList;
                            if(this.accountTeamAndADO.length > 0){
                                this.showCon = true;
                                this.showConADO = true;
                                this.showConDVP = true;
                                this.showConRVP = true;
                                this.showConCTeam = true;
                                }
                            this.Spinner = false;
                            }
                        )
                    .catch(
                        error=>{
                            console.log('Error getting allRHBActive: ' + error.message);
                            this.Spinner = false;
                            }
                        );
                }
        
        getAllNPSPDPMActive(){
            this.Spinner = true;
            this.NPSActivityList = null;
            var report = this.selectedReport;
            if(report === 'NPS Activity Report'){
                getNPSTasks({
                            "letterStart" : this.letterStart,
                            "letterEnd" : this.letterEnd,
                            "ADO_Filter" : this.selectedADO,
                            "RVP_Filter" : this.selectedRVP,
                            "DVP_Filter" : this.selectedDVP,
                            "reportName" : report
                            }
                            )
                            .then(
                                result=>{
                                    var repList = result;
                                    this.NPSActivityList = repList;
                                    this.report4 = true;
                                    if(this.NPSActivityList.length > 0){
                                        this.showNPSActivityList = true;
                                        }
                                    this.Spinner = false;
                                    }
                            )
                    .catch(
                        error=>{
                            console.log('Error Getting NPS Activity Report: ' + error.message);
                            this.Spinner = false;
                            }
                        );
                    }
            else if(report.includes("PDPM")){
                getPDPMTasks({
                    "letterStart" : this.letterStart,
                    "letterEnd" : this.letterEnd,
                    "ADO_Filter" : this.selectedADO,
                    "RVP_Filter" : this.selectedRVP,
                    "DVP_Filter" : this.selectedDVP,
                    "reportName" : report
                    }
                    )
                    .then(
                        result=>{
                            var repList = result;
                            this.report4 = true;
                            this.NPSActivityList = repList;
                            if(this.NPSActivityList.length > 0){
                                this.showNPSActivityList = true;
                                }
                            this.Spinner = false;
                            }
                    )
            .catch(
                error=>{
                    console.log('Error Getting PDPMTasks Report: ' + error.message);
                    this.Spinner = false;
                    }
                    );
                }
            }
        
        convertArrayOfObjectsToCSVAllAccount(){
            var objectRecords = this.objectRecords;
            var csvStringResult, counter, keys, columnDivider, lineDivider;
            if (objectRecords == null || !objectRecords.length){
                console.log('Why is this broken?');
                this.Spinner = false;
                return null;
                 }
            columnDivider = ',';
            lineDivider =  '\n';
            keys = ['Name','Title','Email', 'Account', 'Product Type', 'Start Date', 'Last Date of Service', 'SAP', 'SMART'];
            
            csvStringResult = '';
            csvStringResult += keys.join(columnDivider);
            csvStringResult += lineDivider;
            try{
                if(objectRecords !== undefined){
             for(var i=0; i < objectRecords.length; i++){
                counter = 0;
                if(objectRecords[i].ados !== undefined){
                for(var x = 0; x < objectRecords[i].ados.length; x++){
                    for(var sTempkey in keys){
                    var skey = keys[sTempkey];  
                      if(counter > 0){ 
                          csvStringResult += columnDivider; 
                       }  
                     if(skey == 'Name'){
                         if(objectRecords[i].ados[x].Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].ados[x].Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                     else if(skey == 'Title'){
                         if(objectRecords[i].ados[x].Title !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].ados[x].Title+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                     
                     else if(skey == 'Email'){
                         if(objectRecords[i].ados[x].Email !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].ados[x].Email+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Account'){
                         if(objectRecords[i].a.Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Product Type'){
                         if(objectRecords[i].a.PF_Product_Type__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Product_Type__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Start Date'){
                         if(objectRecords[i].a.PF_Start_Date__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Start_Date__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Last Date of Service'){
                         if(objectRecords[i].a.PF_Last_Date_of_Service__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Last_Date_of_Service__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'SAP'){
                         if(objectRecords[i].a.PF_SAP_ID__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_SAP_ID__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'SMART'){
                         if(objectRecords[i].a.PF_Smart_ID__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Smart_ID__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }   
                        
                     counter++; 
                       }
                    counter = 0;
                    csvStringResult += lineDivider;
                    }
                }
                if(objectRecords[i].dvps !== undefined){
                for(var x = 0; x < objectRecords[i].dvps.length; x++){
                    for(var sTempkey in keys){
                    var skey = keys[sTempkey] ;
                    console.log('sKey DVPs: ' + skey);   
                      if(counter > 0){ 
                          csvStringResult += columnDivider; 
                       }  
                     if(skey == 'Name'){
                         if(objectRecords[i].dvps[x].Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].dvps[x].Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                     else if(skey == 'Title'){
                         if(objectRecords[i].dvps[x].Title !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].dvps[x].Title+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                     
                     else if(skey == 'Email'){
                         if(objectRecords[i].dvps[x].Email !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].dvps[x].Email+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Account'){
                         if(objectRecords[i].a.Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Product Type'){
                         if(objectRecords[i].a.PF_Product_Type__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Product_Type__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Start Date'){
                         if(objectRecords[i].a.PF_Start_Date__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Start_Date__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Last Date of Service'){
                         if(objectRecords[i].a.PF_Last_Date_of_Service__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Last_Date_of_Service__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'SAP'){
                         if(objectRecords[i].a.PF_SAP_ID__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_SAP_ID__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'SMART'){
                         if(objectRecords[i].a.PF_Smart_ID__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Smart_ID__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }   
                        
                     counter++; 
                       }
                    counter = 0;
                    csvStringResult += lineDivider;
                    }
                }
                if(objectRecords[i].rvps !== undefined){
                for(var x = 0; x < objectRecords[i].rvps.length; x++){
                    for(var sTempkey in keys){
                    var skey = keys[sTempkey] ;
                    console.log('sKey RVPs: ' + skey);   
                      if(counter > 0){ 
                          csvStringResult += columnDivider; 
                       }  
                     if(skey == 'Name'){
                         if(objectRecords[i].rvps[x].Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].rvps[x].Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                     else if(skey == 'Title'){
                         if(objectRecords[i].rvps[x].Title !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].rvps[x].Title+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                     
                     else if(skey == 'Email'){
                         if(objectRecords[i].rvps[x].Email !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].rvps[x].Email+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Account'){
                         if(objectRecords[i].a.Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Product Type'){
                         if(objectRecords[i].a.PF_Product_Type__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Product_Type__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Start Date'){
                         if(objectRecords[i].a.PF_Start_Date__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Start_Date__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Last Date of Service'){
                         if(objectRecords[i].a.PF_Last_Date_of_Service__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Last_Date_of_Service__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'SAP'){
                         if(objectRecords[i].a.PF_SAP_ID__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_SAP_ID__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'SMART'){
                         if(objectRecords[i].a.PF_Smart_ID__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Smart_ID__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }   
                        
                     counter++; 
                       }
                    counter = 0;
                    csvStringResult += lineDivider;
                    }
                }
                if(objectRecords[i].cTeam !== undefined){
                for(var x = 0; x < objectRecords[i].cTeam.length; x++){
                    for(var sTempkey in keys){
                    var skey = keys[sTempkey] ;
                    console.log('sKey CTeams: ' + skey);   
                      if(counter > 0){ 
                          csvStringResult += columnDivider; 
                       }  
                     if(skey == 'Name'){
                         if(objectRecords[i].cTeam[x].Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].cTeam[x].Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                     else if(skey == 'Title'){
                         if(objectRecords[i].cTeam[x].Title !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].cTeam[x].Title+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                     
                     else if(skey == 'Email'){
                         if(objectRecords[i].cTeam[x].Email !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].cTeam[x].Email+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Account'){
                         if(objectRecords[i].a.Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Product Type'){
                         if(objectRecords[i].a.PF_Product_Type__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Product_Type__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Start Date'){
                         if(objectRecords[i].a.PF_Start_Date__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Start_Date__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Last Date of Service'){
                         if(objectRecords[i].a.PF_Last_Date_of_Service__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Last_Date_of_Service__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'SAP'){
                         if(objectRecords[i].a.PF_SAP_ID__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_SAP_ID__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'SMART'){
                         if(objectRecords[i].a.PF_Smart_ID__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Smart_ID__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }   
                        
                     counter++; 
                       }
                    counter = 0;
                    csvStringResult += lineDivider;
                    }
                    }
                if(objectRecords[i].cons !== undefined){
                for(var x = 0; x < objectRecords[i].cons.length; x++){
                    for(var sTempkey in keys){
                    var skey = keys[sTempkey] ;
                      if(counter > 0){ 
                          csvStringResult += columnDivider; 
                       }  
                     if(skey == 'Name'){
                         if(objectRecords[i].cons[x].Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].cons[x].Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                     else if(skey == 'Title'){
                         if(objectRecords[i].cons[x].Title !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].cons[x].Title+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                     
                     else if(skey == 'Email'){
                         if(objectRecords[i].cons[x].Email !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].cons[x].Email+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Account'){
                         if(objectRecords[i].a.Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Product Type'){
                         if(objectRecords[i].a.PF_Product_Type__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Product_Type__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Start Date'){
                         if(objectRecords[i].a.PF_Start_Date__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Start_Date__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Last Date of Service'){
                         if(objectRecords[i].a.PF_Last_Date_of_Service__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Last_Date_of_Service__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'SAP'){
                         if(objectRecords[i].a.PF_SAP_ID__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_SAP_ID__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'SMART'){
                         if(objectRecords[i].a.PF_Smart_ID__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Smart_ID__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }   
                        
                     counter++; 
                       }
                    counter = 0;
                    csvStringResult += lineDivider;
                    }
                    }
               }
                }
            else{
                console.log('objectRecords undefined.');
                this.Spinner = false;
                }
            }
            catch(err){
                console.log('Error with export: ' + err.message);
                this.Spinner = false;
            }
            return csvStringResult;
            }
        
        getAllRHBRows(startLetter){
            var start;
            var end;
            if(startLetter === 'A'){
                this.processingFinished = false;
                start = 'a';
                end = 'b';
                this.aList = null;
                }
            else if(startLetter === 'B'){
                start = 'b';
                end = 'c';
                this.bList = null;
                }
            else if(startLetter === 'C'){
                start = 'c';
                end = 'd';
                this.cList = null;
                }
            else if(startLetter === 'D'){
                start = 'd';
                end = 'e';
                this.dList = null;
                }
            else if(startLetter === 'E'){
                start = 'e';
                end = 'f';
                this.eList = null;
                }
            else if(startLetter === 'F'){
                start = 'f';
                end = 'g';
                this.fList = null;
                }
            else if(startLetter === 'G'){
                start = 'g';
                end = 'h';
                this.gList = null;
                }
            else if(startLetter === 'H'){
                start = 'h';
                end = 'i';
                this.hList = null;
                }
            else if(startLetter === 'I'){
                start = 'i';
                end = 'j';
                this.iList = null;
                }
            else if(startLetter === 'J'){
                start = 'j';
                end = 'k';
                this.jList = null;
                }
            else if(startLetter === 'K'){
                start = 'k';
                end = 'l';
                this.kList = null;
                }
            else if(startLetter === 'L'){
                start = 'l';
                end = 'm';
                this.lList  = null;
                }
            else if(startLetter === 'M'){
                start = 'm';
                end = 'n';
                this.mList = null;
                }
            else if(startLetter === 'N'){
                start = 'n';
                end = 'o';
                this.nList = null;
                }
            else if(startLetter === 'O'){
                start = 'o';
                end = 'p';
                this.oList = null;
                }
            else if(startLetter === 'P'){
                start = 'p';
                end = 'q';
                this.pList = null;
                }
            else if(startLetter === 'Q'){
                start = 'q';
                end = 'r';
                this.qList = null;
                }
            else if(startLetter === 'R'){
                start = 'r';
                end = 's';
                this.rList = null;
                }
            else if(startLetter === 'S'){
                start = 's';
                end = 't';
                this.sList = null;
                }
            else if(startLetter === 'T'){
                start = 't';
                end = 'u';
                this.tList = null;
                }
            else if(startLetter === 'U'){
                start = 'u';
                end = 'v';
                this.uList = null;
                }
            else if(startLetter === 'V'){
                start = 'v';
                end = 'w';
                this.vList = null;
                }
            else if(startLetter === 'W'){
                start = 'w';
                end = 'zz';
                this.wList = null;
                }
            getAllRHBActive(
                            {
                            "letterStart" : start,
                            "letterEnd" : end,
                            "ADO_Filter" : this.selectedADO,
                            "RVP_Filter" : this.selectedRVP,
                            "DVP_Filter" : this.selectedDVP
                            }
                            )
                    .then(
                        result=>{
                            var repList = result;
                        if(startLetter === 'A'){
                            this.aList = repList;
                            }
                        else if(startLetter === 'B'){
                            this.bList = repList;
                            }
                        else if(startLetter === 'C'){
                            this.cList = repList;
                            }
                        else if(startLetter === 'D'){
                            this.dList = repList;
                            }
                        else if(startLetter === 'E'){
                            this.eList = repList;
                            }
                        else if(startLetter === 'F'){
                            this.fList = repList;
                            }
                        else if(startLetter === 'G'){
                            this.gList = repList;
                            }
                        else if(startLetter === 'H'){
                            this.hList = repList;
                            }
                        else if(startLetter === 'I'){
                            this.iList = repList;
                            }
                        else if(startLetter === 'J'){
                            this.jList = repList;
                            }
                        else if(startLetter === 'K'){
                            this.kList = repList;
                            }
                        else if(startLetter === 'L'){
                            this.lList = repList;
                            }
                        else if(startLetter === 'M'){
                            this.mList = repList;
                            }
                        else if(startLetter === 'N'){
                            this.nList = repList;
                            }
                        else if(startLetter === 'O'){
                            this.oList = repList;
                            }
                        else if(startLetter === 'P'){
                            this.pList = repList;
                            }
                        else if(startLetter === 'Q'){
                            this.qList = repList;
                            }
                        else if(startLetter === 'R'){
                            this.rList = repList;
                            }
                        else if(startLetter === 'S'){
                            this.sList = repList;
                            }
                        else if(startLetter === 'T'){
                            this.tList = repList;
                            }
                        else if(startLetter === 'U'){
                            this.uList = repList;
                            }
                        else if(startLetter === 'V'){
                            this.vList = repList;
                            }
                        else if(startLetter === 'W'){
                            this.wList = repList;
                            this.processingFinished = true;
                            console.log("Processing Done");
                            }
                        }
                        )
                .catch(
                    error=>{
                        console.log('Error processing list: ' + error.message);
                        this.Spinner = false;
                        }
                    );
            }
        
        getAllNPSPDPMRows(startLetter){
            var start;
            var end;
            var selectedReport = this.selectedReport;
            if(startLetter === 'A'){
                this.processingFinished = false;
                start = 'a';
                end = 'b';
                this.aList = null;
                }
            else if(startLetter === 'B'){
                start = 'b';
                end = 'c';
                this.bList = null;
                }
            else if(startLetter === 'C'){
                start = 'c';
                end = 'd';
                this.cList = null;
                }
            else if(startLetter === 'D'){
                start = 'd';
                end = 'e';
                this.dList = null;
                }
            else if(startLetter === 'E'){
                start = 'e';
                end = 'f';
                this.eList = null;
                }
            else if(startLetter === 'F'){
                start = 'f';
                end = 'g';
                this.fList = null;
                }
            else if(startLetter === 'G'){
                start = 'g';
                end = 'h';
                this.gList = null;
                }
            else if(startLetter === 'H'){
                start = 'h';
                end = 'i';
                this.hList = null;
                }
            else if(startLetter === 'I'){
                start = 'i';
                end = 'j';
                this.iList = null;
                }
            else if(startLetter === 'J'){
                start = 'j';
                end = 'k';
                this.jList = null;
                }
            else if(startLetter === 'K'){
                start = 'k';
                end = 'l';
                this.kList = null;
                }
            else if(startLetter === 'L'){
                start = 'l';
                end = 'm';
                this.lList = null;
                }
            else if(startLetter === 'M'){
                start = 'm';
                end = 'n';
                this.mList = null;
                }
            else if(startLetter === 'N'){
                start = 'n';
                end = 'o';
                this.nList = null;
                }
            else if(startLetter === 'O'){
                start = 'o';
                end = 'p';
                this.oList = null;
                }
            else if(startLetter === 'P'){
                start = 'p';
                end = 'q';
                this.pList = null;
                }
            else if(startLetter === 'Q'){
                start = 'q';
                end = 'r';
                this.qList = null;
                }
            else if(startLetter === 'R'){
                start = 'r';
                end = 's';
                this.rList = null;
                }
            else if(startLetter === 'S'){
                start = 's';
                end = 't';
                this.sList = null;
                }
            else if(startLetter === 'T'){
                start = 't';
                end = 'u';
                this.tList = null;
                }
            else if(startLetter === 'U'){
                start = 'u';
                end = 'v';
                this.uList = null;
                }
            else if(startLetter === 'V'){
                start = 'v';
                end = 'w';
                this.vList = null;
                }
            else if(startLetter === 'W'){
                start = 'w';
                end = 'zz';
                this.wList = null;
                }
            if(selectedReport.includes("PDPM")){
                getPDPMTasks({
                    "letterStart" : start,
                    "letterEnd" : end,
                    "ADO_Filter" : this.selectedADO,
                    "RVP_Filter" : this.selectedRVP,
                    "DVP_Filter" : this.selectedDVP,
                    "reportName" : selectedReport
                    })
                    .then(
                        result=>{
                            var repList = result;
                            if(startLetter === 'A'){
                                this.aList = repList;
                                }
                            else if(startLetter === 'B'){
                                this.bList = repList;
                                }
                            else if(startLetter === 'C'){
                                this.cList = repList;
                                }
                            else if(startLetter === 'D'){
                                this.dList = repList;
                                }
                            else if(startLetter === 'E'){
                                this.eList = repList;
                                }
                            else if(startLetter === 'F'){
                                this.fList = repList;
                                }
                            else if(startLetter === 'G'){
                                this.gList = repList;
                                }
                            else if(startLetter === 'H'){
                                this.hList = repList;
                                }
                            else if(startLetter === 'I'){
                                this.iList = repList;
                                }
                            else if(startLetter === 'J'){
                                this.jList = repList;
                                }
                            else if(startLetter === 'K'){
                                this.kList = repList;
                                }
                            else if(startLetter === 'L'){
                                this.lList = repList;
                                }
                            else if(startLetter === 'M'){
                                this.mList = repList;
                                }
                            else if(startLetter === 'N'){
                                this.nList = repList;
                                }
                            else if(startLetter === 'O'){
                                this.oList = repList;
                                }
                            else if(startLetter === 'P'){
                                this.pList = repList;
                                }
                            else if(startLetter === 'Q'){
                                this.qList = repList;
                                }
                            else if(startLetter === 'R'){
                                this.rList = repList;
                                }
                            else if(startLetter === 'S'){
                                this.sList = repList;
                                }
                            else if(startLetter === 'T'){
                                this.tList = repList;
                                }
                            else if(startLetter === 'U'){
                                this.uList = repList;
                                }
                            else if(startLetter === 'V'){
                                this.vList = repList;
                                }
                            else if(startLetter === 'W'){
                                this.wList = repList;
                                this.processingFinished = true;
                                console.log("Processing Done");
                                }
                                }
                        )
                    .catch(
                        error=>{
                            console.log('Error processing PDPM Tasks: ' + error.message);
                            }
                    );
                }
            else{
                getNPSTasks({
                            "letterStart" : start,
                            "letterEnd" : end,
                            "ADO_Filter" : this.selectedADO,
                            "RVP_Filter" : this.selectedRVP,
                            "DVP_Filter" : this.selectedDVP,
                            "reportName" : selectedReport
                        })
                    .then(
                        result=>{
                            var repList = result;
                            if(startLetter === 'A'){
                                this.aList = repList;
                                }
                            else if(startLetter === 'B'){
                                this.bList = repList;
                                }
                            else if(startLetter === 'C'){
                                this.cList = repList;
                                }
                            else if(startLetter === 'D'){
                                this.dList = repList;
                                }
                            else if(startLetter === 'E'){
                                this.eList = repList;
                                }
                            else if(startLetter === 'F'){
                                this.fList = repList;
                                }
                            else if(startLetter === 'G'){
                                this.gList = repList;
                                }
                            else if(startLetter === 'H'){
                                this.hList = repList;
                                }
                            else if(startLetter === 'I'){
                                this.iList = repList;
                                }
                            else if(startLetter === 'J'){
                                this.jList = repList;
                                }
                            else if(startLetter === 'K'){
                                this.kList = repList;
                                }
                            else if(startLetter === 'L'){
                                this.lList = repList;
                                }
                            else if(startLetter === 'M'){
                                this.mList = repList;
                                }
                            else if(startLetter === 'N'){
                                this.nList = repList;
                                }
                            else if(startLetter === 'O'){
                                this.oList = repList;
                                }
                            else if(startLetter === 'P'){
                                this.pList = repList;
                                }
                            else if(startLetter === 'Q'){
                                this.qList = repList;
                                }
                            else if(startLetter === 'R'){
                                this.rList = repList;
                                }
                            else if(startLetter === 'S'){
                                this.sList = repList;
                                }
                            else if(startLetter === 'T'){
                                this.tList = repList;
                                }
                            else if(startLetter === 'U'){
                                this.uList = repList;
                                }
                            else if(startLetter === 'V'){
                                this.vList = repList;
                                }
                            else if(startLetter === 'W'){
                                this.wList = repList;
                                this.processingFinished = true;
                                console.log("Processing Done");
                                }
                                }
                        )
                    .catch(
                        error=>{
                            console.log('Error processing NPS Tasks: ' + error.message);
                            }
                    );
                }
            }
        
        convertArrayOfObjectsToCSVNPS(){
            var objectRecords = this.objectRecords;
            var csvStringResult, counter, keys, columnDivider, lineDivider;
            if (objectRecords == null || !objectRecords.length){
                console.log('Activity Export Broken');
                this.Spinner = false;
                return null;
                }
            columnDivider = ',';
            lineDivider =  '\n';
            keys = ['Name','Title','Email', 'Account', 'Product Type', 'Start Date', 'Last Date of Service', 'SAP', 'SMART', 'Assigned', 'Subject', 'NPS Score', 'Date', 'Priority', 'Status', 'Full Comments', 'Last Modified Date', 'Company/Account', 'Contact'];
            
            csvStringResult = '';
            csvStringResult += keys.join(columnDivider);
            csvStringResult += lineDivider;
            try{
                if(objectRecords !== undefined){
             for(var i=0; i < objectRecords.length; i++){
                counter = 0;
                if(objectRecords[i].ados !== undefined){
                for(var x = 0; x < objectRecords[i].ados.length; x++){
                    console.log('Ado List start');
                    for(var sTempkey in keys){
                    var skey = keys[sTempkey] ;  
                  // add , [comma] after every String value,. [except first]
                      if(counter > 0){ 
                          csvStringResult += columnDivider; 
                       }  
                     if(skey == 'Name'){
                         if(objectRecords[i].ados[x].Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].ados[x].Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                     else if(skey == 'Title'){
                         if(objectRecords[i].ados[x].Title !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].ados[x].Title+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                     
                     else if(skey == 'Email'){
                         if(objectRecords[i].ados[x].Email !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].ados[x].Email+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Account'){
                         if(objectRecords[i].a.Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Product Type'){
                         if(objectRecords[i].a.PF_Product_Type__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Product_Type__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Start Date'){
                         if(objectRecords[i].a.PF_Start_Date__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Start_Date__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Last Date of Service'){
                         if(objectRecords[i].a.PF_Last_Date_of_Service__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Last_Date_of_Service__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'SAP'){
                         if(objectRecords[i].a.PF_SAP_ID__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_SAP_ID__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'SMART'){
                         if(objectRecords[i].a.PF_Smart_ID__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Smart_ID__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }   
                     counter++; 
                       }
                    counter = 0;
                    csvStringResult += lineDivider;
                    }
                }
                if(objectRecords[i].dvps !== undefined){
                for(var x = 0; x < objectRecords[i].dvps.length; x++){
                    console.log('DVP List start');
                    for(var sTempkey in keys){
                    var skey = keys[sTempkey] ;  
                  // add , [comma] after every String value,. [except first]
                      if(counter > 0){ 
                          csvStringResult += columnDivider; 
                       }  
                     if(skey == 'Name'){
                         if(objectRecords[i].dvps[x].Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].dvps[x].Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                     else if(skey == 'Title'){
                         if(objectRecords[i].dvps[x].Title !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].dvps[x].Title+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                     
                     else if(skey == 'Email'){
                         if(objectRecords[i].dvps[x].Email !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].dvps[x].Email+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Account'){
                         if(objectRecords[i].a.Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Product Type'){
                         if(objectRecords[i].a.PF_Product_Type__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Product_Type__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Start Date'){
                         if(objectRecords[i].a.PF_Start_Date__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Start_Date__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Last Date of Service'){
                         if(objectRecords[i].a.PF_Last_Date_of_Service__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Last_Date_of_Service__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'SAP'){
                         if(objectRecords[i].a.PF_SAP_ID__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_SAP_ID__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'SMART'){
                         if(objectRecords[i].a.PF_Smart_ID__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Smart_ID__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }   
                        
                     counter++; 
                       }
                    counter = 0;
                    csvStringResult += lineDivider;
                    }
                }
                if(objectRecords[i].rvps !== undefined){
                for(var x = 0; x < objectRecords[i].rvps.length; x++){
                    console.log('RVP List start');
                    for(var sTempkey in keys){
                    var skey = keys[sTempkey] ;  
                      if(counter > 0){ 
                          csvStringResult += columnDivider; 
                       }  
                     if(skey == 'Name'){
                         if(objectRecords[i].rvps[x].Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].rvps[x].Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                     else if(skey == 'Title'){
                         if(objectRecords[i].rvps[x].Title !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].rvps[x].Title+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                     
                     else if(skey == 'Email'){
                         if(objectRecords[i].rvps[x].Email !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].rvps[x].Email+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Account'){
                         if(objectRecords[i].a.Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Product Type'){
                         if(objectRecords[i].a.PF_Product_Type__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Product_Type__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Start Date'){
                         if(objectRecords[i].a.PF_Start_Date__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Start_Date__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Last Date of Service'){
                         if(objectRecords[i].a.PF_Last_Date_of_Service__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Last_Date_of_Service__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'SAP'){
                         if(objectRecords[i].a.PF_SAP_ID__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_SAP_ID__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'SMART'){
                         if(objectRecords[i].a.PF_Smart_ID__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Smart_ID__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }   
                        
                     counter++; 
                       }
                    counter = 0;
                    csvStringResult += lineDivider;
                    }
                }
                if(objectRecords[i].tasks !== undefined){
                for(var x = 0; x < objectRecords[i].tasks.length; x++){
                    console.log('Task List start');
                    for(var sTempkey in keys){
                    var skey = keys[sTempkey] ;  
                      if(counter > 0){ 
                          csvStringResult += columnDivider; 
                       }
                     if(skey == 'Assigned'){
                         console.log('Task Owner Name');
                         if(objectRecords[i].tasks[x].Owner.Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].tasks[x].Owner.Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                     else if(skey == 'Subject'){
                         if(objectRecords[i].tasks[x].Subject !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].tasks[x].Subject+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                     
                     else if(skey == 'NPS Score'){
                         if(objectRecords[i].tasks[x].PF_NPS_Score__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].tasks[x].PF_NPS_Score__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Date'){
                         if(objectRecords[i].tasks[x].ActivityDate !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].tasks[x].ActivityDate+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }   
                     else if(skey == 'Priority'){
                         if(objectRecords[i].tasks[x].Priority !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].tasks[x].Priority+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Status'){
                         if(objectRecords[i].tasks[x].Status !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].tasks[x].Status+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }   
                     else if(skey == 'Full Comments'){
                         if(objectRecords[i].tasks[x].Description !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].tasks[x].Description+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     } 
                     else if(skey == 'Last Modified Date'){
                         if(objectRecords[i].tasks[x].LastModifiedDate !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].tasks[x].LastModifiedDate+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Last Modified Date'){
                         if(objectRecords[i].tasks[x].LastModifiedDate !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].tasks[x].LastModifiedDate+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }   
                     else if(skey == 'Account'){
                         console.log('Task Account Name1');
                         if(objectRecords[i].a.Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                        else if(skey == 'Company/Account'){
                            console.log('Task Account Name2');
                         if(objectRecords[i].a.Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Contact'){
                         console.log('Task Contact Name');
                         console.log(objectRecords[i].tasks[x]);
                         if(objectRecords[i].tasks[x].Who !== undefined){
                         if(objectRecords[i].tasks[x].Who.Name !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].tasks[x].Who.Name+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                         }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }   
                     else if(skey == 'Product Type'){
                         if(objectRecords[i].a.PF_Product_Type__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Product_Type__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Start Date'){
                         if(objectRecords[i].a.PF_Start_Date__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Start_Date__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'Last Date of Service'){
                         if(objectRecords[i].a.PF_Last_Date_of_Service__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Last_Date_of_Service__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'SAP'){
                         if(objectRecords[i].a.PF_SAP_ID__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_SAP_ID__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }
                     else if(skey == 'SMART'){
                         if(objectRecords[i].a.PF_Smart_ID__c !== undefined){  
                            csvStringResult += '"'+ objectRecords[i].a.PF_Smart_ID__c+'"';
                             }
                         else{
                            csvStringResult += '"'+ ' ' +'"';
                             }
                     }   
                        
                     counter++; 
                       }
                    counter = 0;
                    csvStringResult += lineDivider;
                    }
                    }
               }
            }
            else{
                console.log('ObjectRecords undefined');
                this.Spinner = false;
                }
            }
            catch(err){
                console.log('Error with export: ' + err.message);
                this.Spinner = false;
            }
            return csvStringResult;        
            }

        openItem(event){
            event.preventDefault();
            var id = event.target.value;
            var url = '/' + id;
            window.open(url);
            }

        next(){
            let countList = [...this.tableData];
            var end = this.end;
            var start = this.start;
            var pageSize = this.pageSize;
            var paginationList = [];
            var i;
            var totalSize = this.totalSize;
            var counter = 0;
            for(i=end+1; i<end+pageSize+1; i++){
                if(countList.length > end){
                    paginationList.push(countList[i]);
                    counter ++ ;
                    }
                }
            start = start + counter;
            end = end + counter;
                
            this.start = start;
            this.end = end;
            this.paginationList = paginationList;
            
            if(this.end >= totalSize){
                this.nextButtonDisabled = true;
                }
            else{
                this.nextButtonDisabled = false;
                }
            
            if(this.start === 0){
                this.prevButtonDisabled = true;
                }
            else{
                this.prevButtonDisabled = false;
                } 
            }
                
        previous(){
            let countList = [...this.tableData];
            var end = this.end;
            var start = this.start;
            var pageSize = this.pageSize;
            var paginationList = [];
            var i;
            var totalSize = this.totalSize;
            var counter = 0;
            for(i = start-pageSize; i < start ; i++){
                if(i > -1){
                    paginationList.push(countList[i]);
                    counter ++;
                    }
                else{
                    start++;
                    }
                }
            start = start - counter;
            end = end - counter;
                
            this.start = start;
            this.end = end;
            this.paginationList = paginationList;
            
            if(this.end >= totalSize){
                this.nextButtonDisabled = true;
                }
            else{
                this.nextButtonDisabled = false;
                }
            
            if(this.start === 0){
                this.prevButtonDisabled = true;
                }
            else{
                this.prevButtonDisabled = false;
                } 
            }

        sortContact(event){
            console.log('Sort Event Caused by: ' + event.target.name);
                var field = event.target.name;
                var sortAsc = this.sortAscContact;
                let records = [...this.tableData];
                var paginationList = [];
                var i;
            
                var key =(a) => a[field]; 
                var reverse;
                if(sortAsc === false){
                    reverse = -1;
                    sortAsc = true;
                    }
                else{
                    reverse = 1;
                    sortAsc = false;
                    }
                    this.sortAscContact = sortAsc;
                    this.sortFieldContact = field;
                    this.tableData = records;
                records.sort((a,b) => {
                    let valueA = key(a) ? key(a).toLowerCase() : '';
                    let valueB = key(b) ? key(b).toLowerCase() : '';
                    return reverse * ((valueA > valueB) - (valueB > valueA));
                    });
                this.sortAsc = sortAsc;
                this.sortField = field;
                this.objectLst = records;
                
                var pageSize = this.pageSize;
                var paginationList = [];
             
                var paginationList = [];
                this.start = 0;
                this.end = pageSize-1;
                var loopSize;
                if(records.length > pageSize){
                    loopSize = pageSize;
                    }
                else{
                    loopSize = result.length;
                    }
                for(var i=0; i< loopSize; i++){
                    paginationList.push(records[i]);    
                    }
                this.paginationList = paginationList;
                this.tableData = records;
            }
        
        sortDVP(event){
            var field = event.target.name;
            var pageSize = this.pageSize;
            var sortAsc = this.sortAscDVP;
            let records = [...this.dvpListAct];
            var reverse;
                if(sortAsc === false){
                    reverse = -1;
                    sortAsc = true;
                    }
                else{
                    reverse = 1;
                    sortAsc = false;
                    }
                records.sort((a,b) => {
                    let valueA = key(a) ? key(a).toLowerCase() : '';
                    let valueB = key(b) ? key(b).toLowerCase() : '';
                    return reverse * ((valueA > valueB) - (valueB > valueA));
                    });
            this.sortAscDVP = sortAsc;
            this.sortFieldDVP = field;
            this.dvpListAct = records;
            var pageSize = this.pageSize2;
            var paginationList = [];
             
            var paginationList = [];
                    this.start = 0;
                    this.end = pageSize-1;
                    var loopSize;
                if(records.length > pageSize){
                    loopSize = pageSize;
                    }
                else{
                    loopSize = result.length;
                    }
                    for(var i=0; i< loopSize; i++){
                         paginationList.push(records[i]);    
                        }
                    this.paginationListDVPAct = paginationList;
                    this.dvpListAct = records;
            }

        sortRVP(event){
            var field = event.target.name;
            pageSize = this.pageSize2;	
            var sortAsc = this.sortAscRVP;
            
            let records = [...this.rvpListAct];
            var reverse;
            if(sortAsc === false){
                reverse = -1;
                sortAsc = true;
                }
            else{
                reverse = 1;
                sortAsc = false;
                }
            records.sort((a,b) => {
                let valueA = key(a) ? key(a).toLowerCase() : '';
                let valueB = key(b) ? key(b).toLowerCase() : '';
                return reverse * ((valueA > valueB) - (valueB > valueA));
                });
            this.sortAscRVP = sortAsc;
            this.sortFieldRVP = field;
            this.rvpListAct = records;
            var pageSize = this.pageSize2;
            var paginationList = [];
             
            var paginationList = [];
                    this.start = 0;
                    this.end = pageSize-1;
                    var loopSize;
                if(records.length > pageSize){
                    loopSize = pageSize;
                    }
                else{
                    loopSize = result.length;
                    }
                    for(var i=0; i< loopSize; i++){
                         paginationList.push(records[i]);    
                        }
                    this.paginationListRVPAct = paginationList;
                    this.rvpListAct = records;
            }

        sortADO(event){
            var field = event.target.name;
            pageSize = this.pageSize2;	
            var sortAsc = this.sortAscADO;
            let records = [...this.adoListAct];
            var reverse;
            if(sortAsc === false){
                reverse = -1;
                sortAsc = true;
                }
            else{
                reverse = 1;
                sortAsc = false;
                }
            records.sort((a,b) => {
                let valueA = key(a) ? key(a).toLowerCase() : '';
                let valueB = key(b) ? key(b).toLowerCase() : '';
                return reverse * ((valueA > valueB) - (valueB > valueA));
                });
            this.sortAscADO = sortAsc;
            this.sortFieldADO = field;
            this.adoListAct = records;
            var end = this.end;
            var start = this.start;
            var pageSize = this.pageSize2;
            var paginationList = [];
             
            var paginationList = [];
                    this.start = 0;
                    this.end = pageSize-1;
                    for(var i=0; i< pageSize; i++){
                         paginationList.push(records[i]);    
                        }
                    this.paginationListADOAct = paginationList;
                    this.adoListAct = records;
            }

}