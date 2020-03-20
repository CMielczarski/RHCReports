import { LightningElement, api } from 'lwc';

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
    @api paginationListDVPAct;
    @api rvpListAct = [];
    @api paginationListRVPAct;
    @api adoListAct = [];
    @api paginationListADOAct;
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

    doInit(){
		helper.getReports(component);
        helper.getAccounts(component);
        helper.getADOList(component);
        helper.getRVPList(component);
        helper.getDVPList(component);
        }
    
    handleADOChange(event){
        var selectedOptionsList = event.getParam("value");
        console.log(selectedOptionsList);
        this.selectedADO = selectedOptionsList;
    	}
    
    handleRVPChange(event){
        var selectedOptionsList = event.getParam("value");
        console.log(selectedOptionsList);
        this.selectedRVP = selectedOptionsList;
    	}
    
    handleDVPChange(event){
        var selectedOptionsList = event.getParam("value");
        console.log(selectedOptionsList);
        this.selectedDVP = selectedOptionsList;
    	}
    
    onReportChange(){
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'Contacts Reporting'){
            this.showAlpha = false;
            this.report1 = true;
            this.report2 = false;
        	this.report3 = false;
            this.report4 = false;
            this.showExtraFilters = false;
        	}
        else if(report === 'Activity Reporting'){
            this.showAlpha = false;
            this.report1 = false;
            this.report2 = true;
            this.report3 = false;
            this.report4 = false;
            this.showExtraFilters = false;
        	}
        else if(report === 'NPS Activity Report'){
            this.showExtraFilters = true;
            this.showAlpha = false;
            this.showAlpha = true;
            this.report1 = false;
            this.report2 = false;
            this.report3 = false;
            this.report4 = true;
            helper.getAllNPSPDPMActive(component);
            var startLetter = 'A';
            helper.getAllNPSPDPMRows(component, startLetter).then(
            $A.getCallback(function(result){
                
            })
        		)
            .then(
            $A.getCallback(function(result){
                var startLetter = 'B';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'C';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'D';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'E';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'F';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'G';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'H';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'I';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'J';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'K';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'L';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'M';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'N';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'O';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'P';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'Q';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'R';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'S';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'T';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'U';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'V';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'W';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            ).catch(
                    $A.getCallback(function(error){
                        // Something went wrong
                        alert('An error occurred : ' + error.message);
                    })
                );
            
        	}
        else if(report.includes("PDPM")){
            this.showAlpha = false;
            this.showAlpha = true;
            this.report1 = false;
            this.report2 = false;
            this.report3 = false;
            this.report4 = true;
            helper.getAllNPSPDPMActive(component);
            this.showExtraFilters = true;
        	
            var startLetter = 'A';
            helper.getAllNPSPDPMRows(component, startLetter).then(
            $A.getCallback(function(result){
                
            })
        		)
            .then(
            $A.getCallback(function(result){
                var startLetter = 'B';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'C';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'D';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'E';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'F';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'G';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'H';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'I';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'J';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'K';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'L';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'M';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'N';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'O';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'P';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'Q';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'R';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'S';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'T';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'U';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'V';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'W';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            ).catch(
                    $A.getCallback(function(error){
                        // Something went wrong
                        alert('An error occurred : ' + error.message);
                    })
                );
        	}
        else if(report === 'All Accounts Reporting'){
            this.showAlpha = false;
            this.showAlpha = true;
            this.report1 = false;
            this.report2 = false;
        	this.report3 = true;
            this.report4 = false;
            this.showExtraFilters = true;
            
            var startLetter = 'A';
            helper.getAllRHBRows(component, startLetter).then(
            $A.getCallback(function(result){
                
            })
        		)
            .then(
            $A.getCallback(function(result){
                var startLetter = 'B';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'C';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'D';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'E';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'F';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'G';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'H';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'I';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'J';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'K';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'L';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'M';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'N';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'O';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'P';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'Q';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'R';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'S';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'T';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'U';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'V';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'W';
                return helper.getAllRHBRows(component, startLetter);      
            })
            ).catch(
                    $A.getCallback(function(error){
                        // Something went wrong
                        alert('An error occurred : ' + error.message);
                    })
                );
            
        	}   
        helper.disableSelectAccount(component);
    	}
    
    runReport(){
        
        var report = component.find("InputSelectReport").get("v.value");
        
        if(report === 'Contacts Reporting'){
            this.showAlpha = false;
            helper.getFacility(component);
            helper.getDVPTeams(component);
        	helper.getRVPTeams(component);
        	helper.getADOTeams(component);
            helper.runReport(component);
            this.report1 = true;
            this.report2 = false;
        	this.report3 = false;
        	this.report4 = false;
        	}
        else if(report === 'Activity Reporting'){
            this.showAlpha = false;
            helper.getFacility(component);
            this.report1 = false;
            this.report2 = true;
            this.report3 = false;
            this.report4 = false;
        	helper.getDVPActivities(component);
            helper.getRVPActivities(component);
            helper.getADOActivities(component);
        	}
        else if(report === 'NPS Activity Report'){
            this.showAlpha = false;
            this.showAlpha = true;
            this.report1 = false;
            this.report2 = false;
            this.report3 = false;
            this.report4 = true;
            this.showExtraFilters = true;
            helper.getAllNPSPDPMActive(component);
            
            var startLetter = 'A';
            helper.getAllNPSPDPMRows(component, startLetter).then(
            $A.getCallback(function(result){
                
            })
        		)
            .then(
            $A.getCallback(function(result){
                var startLetter = 'B';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'C';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'D';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'E';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'F';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'G';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'H';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'I';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'J';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'K';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'L';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'M';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'N';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'O';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'P';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'Q';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'R';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'S';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'T';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'U';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'V';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'W';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .catch(
                    $A.getCallback(function(error){
                        // Something went wrong
                        alert('An error occurred : ' + error.message);
                    })
                );
            
        	}
        else if(report.includes("PDPM")){
            this.showAlpha = false;
            this.showAlpha = true;
            this.report1 = false;
            this.report2 = false;
            this.report3 = false;
            this.report4 = true;
            helper.getAllNPSPDPMActive(component);
            this.showExtraFilters = true;
        	
            var startLetter = 'A';
            helper.getAllNPSPDPMRows(component, startLetter).then(
            $A.getCallback(function(result){
                
            })
        		)
            .then(
            $A.getCallback(function(result){
                var startLetter = 'B';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'C';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'D';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'E';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'F';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'G';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'H';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'I';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'J';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'K';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'L';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'M';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'N';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'O';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'P';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'Q';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'R';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'S';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'T';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'U';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'V';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'W';
                return helper.getAllNPSPDPMRows(component, startLetter);      
            })
            )
            .catch(
                    $A.getCallback(function(error){
                        // Something went wrong
                        alert('An error occurred : ' + error.message);
                    })
                );
        	}
        else if(report === 'All Accounts Reporting'){
            this.showAlpha = false;
            this.showAlpha = true;
            this.report1 = false;
            this.report2 = false;
        	this.report3 = true;
            this.report4 = false;
            helper.getAllRHBActive(component);
        	
            var startLetter = 'A';
            helper.getAllRHBRows(component, startLetter).then(
            $A.getCallback(function(result){
                
            })
        		)
            .then(
            $A.getCallback(function(result){
                var startLetter = 'B';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'C';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'D';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'E';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'F';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'G';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'H';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'I';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'J';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'K';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'L';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'M';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'N';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'O';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'P';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'Q';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'R';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'S';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'T';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'U';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'V';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .then(
            $A.getCallback(function(result){
                var startLetter = 'W';
                return helper.getAllRHBRows(component, startLetter);      
            })
            )
            .catch(
                    $A.getCallback(function(error){
                        // Something went wrong
                        alert('An error occurred : ' + error.message);
                    })
                );
        
        	}
        }
    
        
    onTabChangeA(){
        this.letterStart = "a";
        this.letterEnd = "b";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}
        }
    
    onTabChangeB(){
        this.letterStart = "b";
        this.letterEnd = "c";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeC(){
        this.letterStart = "c";
        this.letterEnd = "d";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeD(){
        this.letterStart = "d";
        this.letterEnd = "e";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeE(){
        this.letterStart = "e";
        this.letterEnd = "f";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeF(){
        this.letterStart = "f";
        this.letterEnd = "g";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeG(){
        this.letterStart = "g";
        this.letterEnd = "h";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeH(){
        this.letterStart = "h";
        this.letterEnd = "i";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeI(){
        this.letterStart = "i";
        this.letterEnd = "j";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeJ(){
        this.letterStart = "j";
        this.letterEnd = "k";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeK(){
        this.letterStart = "k";
        this.letterEnd = "l";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeL(){
        this.letterStart = "l";
        this.letterEnd = "m";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeM(){
        this.letterStart = "m";
        this.letterEnd = "n";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeN(){
        this.letterStart = "n";
        this.letterEnd = "o";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeO(){
        this.letterStart = "o";
        this.letterEnd = "p";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}           
    	}
    
    onTabChangeP(){
        this.letterStart = "p";
        this.letterEnd = "q";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeQ(){
        this.letterStart = "q";
        this.letterEnd = "r";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeR(){
        this.letterStart = "r";
        this.letterEnd = "s";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeS(){
        this.letterStart = "s";
        this.letterEnd = "t";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeT(){
        this.letterStart = "t";
        this.letterEnd = "u";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeU(){
        this.letterStart = "u";
        this.letterEnd = "v";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}

    onTabChangeV(){
        this.letterStart = "v";
        this.letterEnd = "w";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeW(){
        this.letterStart = "w";
        this.letterEnd = "x";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeX(){
        this.letterStart = "x";
        this.letterEnd = "y";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeY(){
        this.letterStart = "y";
        this.letterEnd = "z";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    onTabChangeZ(){
        this.letterStart = "z";
        this.letterEnd = "zz";
        var report = component.find("InputSelectReport").get("v.value");
        if(report === 'All Accounts Reporting'){
        	helper.getAllRHBActive(component);                
        	}
        else if(report === 'NPS Activity Report' || report.includes("PDPM")){
            helper.getAllNPSPDPMActive(component);
        	}            
    	}
    
    downloadCsvAllAccount(){
            var stockData = [];
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
            
                if(a != null){
            for(var aa=0; aa< a.length; aa++){
                 	stockData.push(a[aa]);    
    				}
                }
                if(b != null){
            for(var bb=0; bb< b.length; bb++){
                 	stockData.push(b[bb]);    
    				}
                }
                if(c != null){
                for(var cc=0; cc< c.length; cc++){
                 	stockData.push(c[cc]);    
    				}
                }
                if(d != null){
                for(var dd=0; dd< d.length; dd++){
                 	stockData.push(d[dd]);    
    				}
                }
                if(e != null){
                for(var ee=0; ee< e.length; ee++){
                 	stockData.push(e[ee]);    
    				}
                }
                if(f != null){
                for(var ff=0; ff< f.length; ff++){
                 	stockData.push(f[ff]);    
    				}
                }
                if(g != null){
                for(var gg=0; gg< g.length; gg++){
                 	stockData.push(g[gg]);    
    				}
                }
                if(h != null){
                for(var hh=0; hh< h.length; hh++){
                 	stockData.push(h[hh]);    
    				}
                }
                if(i != null){
                for(var ii=0; ii< i.length; ii++){
                 	stockData.push(i[ii]);    
    				}
                }
                if(j != null){
                for(var jj=0; jj< j.length; jj++){
                 	stockData.push(j[jj]);    
    				}
                }
                if(k != null){
                for(var kk=0; kk< k.length; kk++){
                 	stockData.push(k[kk]);    
    				}
                }
                if(l != null){
                for(var ll=0; ll< l.length; ll++){
                 	stockData.push(l[ll]);    
    				}
                }
                if(m != null){
                for(var mm=0; mm< m.length; mm++){
                 	stockData.push(m[mm]);    
    				}
                }
                if(n != null){
                for(var nn=0; nn< n.length; nn++){
                 	stockData.push(n[nn]);    
    				}
                }
                if(o != null){
                for(var oo=0; oo< o.length; oo++){
                 	stockData.push(o[oo]);    
    				}
                }
                if(p != null){
                for(var pp=0; pp< p.length; pp++){
                 	stockData.push(p[pp]);    
    				}
                }
                if(q != null){
                for(var qq=0; qq< q.length; qq++){
                 	stockData.push(q[qq]);    
    				}
                }
                if(r != null){
                for(var rr=0; rr< r.length; rr++){
                 	stockData.push(r[rr]);    
    				}
                }
                if(s != null){
                for(var ss=0; ss< s.length; ss++){
                 	stockData.push(s[ss]);    
    				}
                }
                if(t != null){
                for(var tt=0; tt< t.length; tt++){
                 	stockData.push(t[tt]);    
    				}
                }
                if(u != null){
                for(var uu=0; uu< u.length; uu++){
                 	stockData.push(u[uu]);    
    				}
                }
                if(v != null){
                for(var vv=0; vv< v.length; vv++){
                 	stockData.push(v[vv]);    
    				}
                }
                if(w != null){
                for(var ww=0; ww< w.length; ww++){
                 	stockData.push(w[ww]);    
    				}
                }
                if(x != null){
                for(var xx=0; xx< x.length; xx++){
                 	stockData.push(x[xx]);    
    				}
                }
                if(y != null){
                for(var yy=0; yy< y.length; yy++){
                 	stockData.push(y[yy]);    
    				}
                }
                if(z != null){
                for(var zz=0; zz< z.length; zz++){
                 	stockData.push(z[zz]);    
    				}
                }
                var report = component.find("InputSelectReport").get("v.value");
        		
                if(report === 'All Accounts Reporting'){
        			var csv = helper.convertArrayOfObjectsToCSVAllAccount(component,stockData);
                    }
                else if(report === 'NPS Activity Report' || report.includes("PDPM")){
                	var csv = helper.convertArrayOfObjectsToCSVNPS(component,stockData);
                	}
        	if(csv == null){
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

        getReports() {
            this.Spinner = true;
            var action = component.get("c.getReportNames");
            action.setCallback(this, function(response){
                var state = response.getState();
                console.log('=====state======',state);
                if(component.isValid() && state === "SUCCESS") {
                        var stringItems = response.getReturnValue();
                        this.selReports = stringItems; 
                    this.Spinner = false;
                        }
                else if(state === "ERROR"){
                    this.Spinner = false;
                    var msgId = component.find("uiMessageid");
                    $A.util.addClass(msgId, 'toggle');
                    //Show toast Error
                    return;
                    }
                });
            $A.enqueueAction(action);
            }
        
        getAccounts() {
            this.Spinner = true;
            var action = component.get("c.getAccounts");
            action.setCallback(this, function(response){
                var state = response.getState();
                console.log('=====state======',state);
                if(component.isValid() && state === "SUCCESS") {
                        var stringItems = response.getReturnValue();
                        this.selAccounts = stringItems; 
                    this.Spinner = false;
                        }
                else if(state === "ERROR"){
                    this.Spinner = false;
                    var msgId = component.find("uiMessageid");
                    $A.util.addClass(msgId, 'toggle');
                    //Show toast Error
                    return;
                    }
                });
            $A.enqueueAction(action);
            }
        
        getDVPTeams(){
            this.dvpList = null;
            this.paginationListDVP = null;
            var pageSize = this.pageSize;
            var action = this.getDVPTeams;
            action.setParams({
                "accName" : component.find("InputSelectAccount").get("v.value")
                });
            action.setStorable();
            action.setCallback(this, function(a){
                var response = a.getReturnValue();
                if (response == null || response == "" || response == "[]" || response == "{}"){
                    var msgId = component.find("uiMessageid");
                    $A.util.addClass(msgId, 'toggle');
                    //Show toast Error
                    return;
                    } 
                else{
                    var repList = response;
                    var paginationList = [];
                    this.start = 0;
                    this.end = pageSize-1;
                    for(var i=0; i< pageSize; i++){
                         paginationList.push(response[i]);    
                        }
                    this.paginationListDVP = paginationList;
                    this.dvpList = response;
                    }
                });
            $A.enqueueAction(action);
            }
        
        getDVPActivities(){
            this.dvpListAct = null;
            this.paginationListDVPAct = null;
            var pageSize = this.pageSize2;
            var action = this.getDVPActivities;
            action.setParams({
                "accName" : component.find("InputSelectAccount").get("v.value")
                });
            action.setStorable();
            action.setCallback(this, function(a){
                var response = a.getReturnValue();
                if (response == null || response == "" || response == "[]" || response == "{}"){
                    var msgId = component.find("uiMessageid");
                    $A.util.addClass(msgId, 'toggle');
                    //Show toast Error
                    return;
                    } 
                else{
                    var repList = response;
                    var paginationList = [];
                    this.start = 0;
                    this.end = pageSize-1;
                    for(var i=0; i< pageSize; i++){
                         paginationList.push(response[i]);    
                        }
                    this.paginationListDVPAct = paginationList;
                    this.dvpListAct = response;
                    }
                });
            $A.enqueueAction(action);
            }
        
        getRVPTeams(){
            this.rvpList = null;
            this.paginationListRVP = null;
            var pageSize = this.pageSize;
            var action = this.getRVPTeams;
            action.setParams({
                "accName" : component.find("InputSelectAccount").get("v.value")
                });
            action.setStorable();
            action.setCallback(this, function(a){
                var response = a.getReturnValue();
                if (response == null || response == "" || response == "[]" || response == "{}"){
                    var msgId = component.find("uiMessageid");
                    $A.util.addClass(msgId, 'toggle');
                    //Show toast Error
                    return;
                    } 
                else{
                    var repList = response;
                    var paginationList = [];
                    this.start = 0;
                    this.end = pageSize-1;
                    for(var i=0; i< pageSize; i++){
                         paginationList.push(response[i]);    
                        }
                    this.paginationListRVP =  paginationList;
                    this.rvpList = response;
                    }
                });
            $A.enqueueAction(action);
            }
        
        getRVPActivities(){
            this.rvpListAct = null;
            this.paginationListRVPAct = null;
            var pageSize = this.pageSize2;
            var action = this.getRVPActivities;
            action.setParams({
                "accName" : component.find("InputSelectAccount").get("v.value")
                });
            action.setStorable();
            action.setCallback(this, function(a){
                var response = a.getReturnValue();
                if (response == null || response == "" || response == "[]" || response == "{}"){
                    var msgId = component.find("uiMessageid");
                    $A.util.addClass(msgId, 'toggle');
                    //Show toast Error
                    return;
                    } 
                else{
                    var repList = response;
                    var paginationList = [];
                    this.start = 0;
                    this.end = pageSize-1;
                    for(var i=0; i< pageSize; i++){
                         paginationList.push(response[i]);    
                        }
                    this.paginationListRVPAct = paginationList;
                    this.rvpListAct = response;
                    }
                });
            $A.enqueueAction(action);
            }
        
        getADOTeams(){
            this.adoList = null;
            this.paginationListADO = null;
            var pageSize = this.pageSize;
            var action = this.getADOTeams;
            action.setParams({
                "accName" : component.find("InputSelectAccount").get("v.value")
                });
            action.setStorable();
            action.setCallback(this, function(a){
                var response = a.getReturnValue();
                if (response == null || response == "" || response == "[]" || response == "{}"){
                    var msgId = component.find("uiMessageid");
                    $A.util.addClass(msgId, 'toggle');
                    //Show toast Error
                    return;
                    } 
                else{
                    var repList = response;
                    var paginationList = [];
                    this.start = 0;
                    this.end = pageSize-1;
                    for(var i=0; i< pageSize; i++){
                         paginationList.push(response[i]);    
                        }
                    this.paginationListADO = paginationList;
                    this.adoList = response;
                    }
                });
            $A.enqueueAction(action);
            }
        
        getADOActivities(){
            this.adoListAct = null;
            this.paginationListADOAct = null;
            var pageSize = this.pageSize2;
            var action = this.getADOActivities;
            action.setParams({
                "accName" : component.find("InputSelectAccount").get("v.value")
                });
            action.setStorable();
            action.setCallback(this, function(a){
                var response = a.getReturnValue();
                if (response == null || response == "" || response == "[]" || response == "{}"){
                    var msgId = component.find("uiMessageid");
                    $A.util.addClass(msgId, 'toggle');
                    //Show toast Error
                    return;
                    } 
                else{
                    var repList = response;
                    var paginationList = [];
                    this.start = 0;
                    this.end = pageSize-1;
                    for(var i=0; i< pageSize; i++){
                         paginationList.push(response[i]);    
                        }
                    this.paginationListADOAct = paginationList;
                    this.adoListAct = response;
                    }
                });
            $A.enqueueAction(action);
            }
        
        getFacility(){
            var action = this.getFacility;
            action.setParams({
                            "accName" : component.find("InputSelectAccount").get("v.value")
                            }); 
            action.setCallback(this, function(a){
                var response = a.getReturnValue();
                if (response == null || response == "" || response == "[]" || response == "{}"){
                    var msgId = component.find("uiMessageid");
                    $A.util.addClass(msgId, 'toggle');
                    //Show toast Error
                    return;
                    } 
                else{
                    var repList = response;
                    this.facility = repList;
                    }
                });
            $A.enqueueAction(action);
            }
        
        disableSelectAccount(){
            var inputSelReport = component.find("InputSelectReport");
            var inputAcc = component.find("InputSelectAccount");
            if(component.find("InputSelectReport").get("v.value") == 'Contacts Reporting' || component.find("InputSelectReport").get("v.value") == 'Activity Reporting'){
                 inputAcc.set("v.disabled", false); 
                }
            else{
                inputAcc.set("v.disabled", true);
                }
            }
        
        runReport(){
            this.Spinner = true;
            this.tableData = null;
            this.paginationList = null;
            var pageSize = this.pageSize;
            var action = this.getReportTable;
            action.setParams({
                "selReport" : component.find("InputSelectReport").get("v.value"),
                "accName" : component.find("InputSelectAccount").get("v.value")
                });
            action.setStorable();
            action.setCallback(this, function(a){
                var response = a.getReturnValue();
                if (response == null || response == "" || response == "[]" || response == "{}"){
                    var msgId = component.find("uiMessageid");
                    $A.util.addClass(msgId, 'toggle');
                    //Show toast Error
                    this.Spinner = false;
                    return;
                    } 
                else{
                    var repList = response;
                    var paginationList = [];
                    this.start = 0;
                    this.end = pageSize-1;
                    for(var i=0; i< pageSize; i++){
                         paginationList.push(response[i]);    
                        }
                    this.paginationList = paginationList;
                    this.tableData = response;
                    this.Spinner = false;
                    }
                });
            $A.enqueueAction(action);
            }
        
        next(){
            var accountList = this.tableData;
            var end = component.get("v.end");
            var start = component.get("v.start");
            var pageSize = component.get("v.pageSize");
            var paginationList = [];
            
            var counter = 0;
            for(var i=end+1; i<end+pageSize+1; i++){
             if(accountList.length > end){
                 paginationList.push(accountList[i]);
                counter ++ ;
                 }
                }
            start = start + counter;
            end = end + counter;
            
            this.start = start;
            this.end = end;
            
            this.paginationList = paginationList;
            }
        
        previous(){
             var accountList = this.tableData;
            var end = component.get("v.end");
            var start = component.get("v.start");
            var pageSize = component.get("v.pageSize");
            var paginationList = [];
             
            var counter = 0;
            for(var i= start-pageSize; i < start ; i++){
                if(i > -1){
                    paginationList.push(accountList[i]);
                    counter ++;
                     }
                else{
                    start++;
                    }
                }
            start = start - counter;
            end = end - counter;
            
            this.start = start;
            this.end  = end;
            
            this.paginationList = paginationList;
            }
        
        sortByContact(component, field){
            pageSize = this.pageSize;	
            var sortAsc = this.sortAscContact,
            sortField = this.sortFieldContact,
            records = this.tableData;
                sortAsc = sortField != field || !sortAsc;
                records.sort(function(a,b){
                var t1 = a[field] == b[field],
                    t2 = (!a[field] && b[field]) || (a[field] < b[field]);
                return t1? 0: (sortAsc?-1:1)*(t2?1:-1);
                });
            this.sortAscContact = sortAsc;
            this.sortFieldContact = field;
            this.tableData = records;
            var end = this.end;
            var start = this.start;
            var pageSize = this.pageSize;
            var paginationList = [];
             
            var paginationList = [];
                    this.start = 0;
                    this.end = pageSize-1;
                    for(var i=0; i< pageSize; i++){
                         paginationList.push(records[i]);    
                        }
                    this.paginationList = paginationList;
                    this.tableData = records;
            }
        
        sortByDVP(component, field){
            pageSize = this.pageSize;	
            var sortAsc = this.sortAscDVP,
            sortField = this.sortField,
            records = this.dvpListAct;
                sortAsc = sortField != field || !sortAsc;
                records.sort(function(a,b){
                var t1 = a[field] == b[field],
                    t2 = (!a[field] && b[field]) || (a[field] < b[field]);
                return t1? 0: (sortAsc?-1:1)*(t2?1:-1);
                });
            this.sortAscDVP = sortAsc;
            this.sortFieldDVP = field;
            this.dvpListAct = records;
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
                    this.paginationListDVPAct = paginationList;
                    this.dvpListAct = records;
            }
        
        sortByRVP(component, field){
            pageSize = this.pageSize2;	
            var sortAsc = this.sortAscRVP,
            sortField = this.sortFieldRVP,
            records = this.rvpListAct;
                sortAsc = sortField != field || !sortAsc;
                records.sort(function(a,b){
                var t1 = a[field] == b[field],
                    t2 = (!a[field] && b[field]) || (a[field] < b[field]);
                return t1? 0: (sortAsc?-1:1)*(t2?1:-1);
                });
            this.sortAscRVP = sortAsc;
            this.sortFieldRVP = field;
            this.rvpListAct = records;
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
                    this.paginationListRVPAct = paginationList;
                    this.rvpListAct = records;
            }
        
        sortByADO(component, field){
            pageSize = this.pageSize2;	
            var sortAsc = this.sortAscADO,
            sortField = this.sortFieldADO,
            records = this.adoListAct;
                sortAsc = sortField != field || !sortAsc;
                records.sort(function(a,b){
                var t1 = a[field] == b[field],
                    t2 = (!a[field] && b[field]) || (a[field] < b[field]);
                return t1? 0: (sortAsc?-1:1)*(t2?1:-1);
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
        
        getAllRHBActive(){
            this.Spinner = true;
            this.accountTeamAndADO = null;
            var action = this.getAllRHBActive;
            action.setParams({
                                "letterStart" : this.letterStart,
                                "letterEnd" : this.letterEnd,
                                "ADO_Filter" : this.selectedADO,
                                "RVP_Filter" : this.selectedRVP,
                                "DVP_Filter" : this.selectedDVP
                                });
            action.setStorable();
            action.setCallback(this, function(a){
                var response = a.getReturnValue();
                if (response == null || response == "" || response == "[]" || response == "{}"){
                    var msgId = component.find("uiMessageid");
                    $A.util.addClass(msgId, 'toggle');
                    //Show toast Error
                    this.Spinner = false;
                    return;
                    } 
                else{
                    var repList = response;
                    this.accountTeamAndADO = response;
                    this.Spinner = false;
                    }
                });
            $A.enqueueAction(action);
            }
        
        getAllNPSPDPMActive(){
            this.Spinner = true;
            this.NPSActivityList = null;
            var report = component.find("InputSelectReport").get("v.value");
            if(report === 'NPS Activity Report'){
                var action = component.get("c.getNPSTasks");
                }
            else if(report.includes("PDPM")){
                var action = component.get("c.getPDPMTasks");
                }
            action.setParams({
                                "letterStart" : this.letterStart,
                                "letterEnd" : this.letterEnd,
                                "ADO_Filter" : this.selectedADO,
                                "RVP_Filter" : this.selectedRVP,
                                "DVP_Filter" : this.selectedDVP,
                                "reportName" : report
                                });
            action.setStorable();
            action.setCallback(this, function(a){
                var response = a.getReturnValue();
                if (response == null || response == "" || response == "[]" || response == "{}"){
                    var msgId = component.find("uiMessageid");
                    $A.util.addClass(msgId, 'toggle');
                    //Show toast Error
                    this.Spinner =  false;
                    return;
                    } 
                else{
                    var repList = response;
                    this.NPSActivityList = response;
                    this.Spinner = false;
                    }
                });
            $A.enqueueAction(action);
            }
        
        convertArrayOfObjectsToCSVAllAccount(component,objectRecords){
            // declare variables
            var csvStringResult, counter, keys, columnDivider, lineDivider;
            console.log('objectRecords Processing: ' + objectRecords);
            // check if "objectRecords" parameter is null, then return from function
            if (objectRecords == null || !objectRecords.length){
                console.log('Why is this broken?');
                return null;
                 }
            // store ,[comma] in columnDivider variabel for sparate CSV values and 
            // for start next line use '\n' [new line] in lineDivider varaible  
            columnDivider = ',';
            lineDivider =  '\n';
     
            // in the keys valirable store fields API Names as a key 
            // this labels use in CSV file header  
            keys = ['Name','Title','Email', 'Account', 'Product Type', 'Start Date', 'Last Date of Service', 'SAP', 'SMART'];
            
            csvStringResult = '';
            csvStringResult += keys.join(columnDivider);
            csvStringResult += lineDivider;
             for(var i=0; i < objectRecords.length; i++){
                counter = 0;
                if(objectRecords[i].ados !== undefined){
                for(var x = 0; x < objectRecords[i].ados.length; x++){
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
                    for(var sTempkey in keys){
                    var skey = keys[sTempkey] ;  
                  // add , [comma] after every String value,. [except first]
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
                  // add , [comma] after every String value,. [except first]
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
                  // add , [comma] after every String value,. [except first]
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
               }// outer main for loop close 
               // return the CSV formate String 
            return csvStringResult;        
            }
        
        getADOList(){
            var action = component.get("c.getADOs");
            action.setCallback(this, function(response){
                var state = response.getState();
                console.log('=====state======',state);
                if(component.isValid() && state === "SUCCESS") {
                        var stringItems = response.getReturnValue();
                    
                    var options = [];
                    for(var i = 0; i < stringItems.length; i++){ 
                        options.push({ value: stringItems[i], label: stringItems[i]});
                    }
                    this.adoListChoose = options; 
                        }
                else if(state === "ERROR"){
                    var msgId = component.find("uiMessageid");
                    $A.util.addClass(msgId, 'toggle');
                    //Show toast Error
                    return;
                    }
                });
            $A.enqueueAction(action);
            }
                
        getRVPList(){
            var action = component.get("c.getRVPs");
            action.setCallback(this, function(response){
                var state = response.getState();
                console.log('=====state======',state);
                if(component.isValid() && state === "SUCCESS") {
                        var stringItems = response.getReturnValue();
                    var options = [];
                    for(var i = 0; i < stringItems.length; i++){ 
                        options.push({ value: stringItems[i], label: stringItems[i]});
                    }
                        this.rvpListChoose = options; 
                        }
                else if(state === "ERROR"){
                    var msgId = component.find("uiMessageid");
                    $A.util.addClass(msgId, 'toggle');
                    //Show toast Error
                    return;
                    }
                });
            $A.enqueueAction(action);
            }
        
        getDVPList(){
            var action = component.get("c.getDVPs");
            action.setCallback(this, function(response){
                var state = response.getState();
                console.log('=====state======',state);
                if(component.isValid() && state === "SUCCESS") {
                        var stringItems = response.getReturnValue();
                    var options = [];
                    for(var i = 0; i < stringItems.length; i++){ 
                        options.push({ value: stringItems[i], label: stringItems[i]});
                    }
                        this.dvpListChoose = options; 
                        }
                else if(state === "ERROR"){
                    var msgId = component.find("uiMessageid");
                    $A.util.addClass(msgId, 'toggle');
                    //Show toast Error
                    return;
                    }
                });
            $A.enqueueAction(action);
            }
        
        getAllRHBRows(component, startLetter){
            var start;
            var end;
            if(startLetter === 'A'){
                console.log('A');
                this.processingFinished = false;
                start = 'a';
                end = 'b';
                this.aList = null;
                }
            else if(startLetter === 'B'){
                console.log('B');
                start = 'b';
                end = 'c';
                this.bList = null;
                }
            else if(startLetter === 'C'){
                console.log('C');
                start = 'c';
                end = 'd';
                this.cList = null;
                }
            else if(startLetter === 'D'){
                console.log('D');
                start = 'd';
                end = 'e';
                this.dList = null;
                }
            else if(startLetter === 'E'){
                console.log('E');
                start = 'e';
                end = 'f';
                this.eList = null;
                }
            else if(startLetter === 'F'){
                console.log('F');
                start = 'f';
                end = 'g';
                this.fList = null;
                }
            else if(startLetter === 'G'){
                console.log('G');
                start = 'g';
                end = 'h';
                this.gList = null;
                }
            else if(startLetter === 'H'){
                console.log('H');
                start = 'h';
                end = 'i';
                this.hList = null;
                }
            else if(startLetter === 'I'){
                console.log('I');
                start = 'i';
                end = 'j';
                this.iList = null;
                }
            else if(startLetter === 'J'){
                console.log('J');
                start = 'j';
                end = 'k';
                this.jList = null;
                }
            else if(startLetter === 'K'){
                console.log('K');
                start = 'k';
                end = 'l';
                this.kList = null;
                }
            else if(startLetter === 'L'){
                console.log('L');
                start = 'l';
                end = 'm';
                this.lList  = null;
                }
            else if(startLetter === 'M'){
                console.log('M');
                start = 'm';
                end = 'n';
                this.mList = null;
                }
            else if(startLetter === 'N'){
                console.log('N');
                start = 'n';
                end = 'o';
                this.nList = null;
                }
            else if(startLetter === 'O'){
                console.log('O');
                start = 'o';
                end = 'p';
                this.oList = null;
                }
            else if(startLetter === 'P'){
                console.log('P');
                start = 'p';
                end = 'q';
                this.pList = null;
                }
            else if(startLetter === 'Q'){
                console.log('Q');
                start = 'q';
                end = 'r';
                this.qList = null;
                }
            else if(startLetter === 'R'){
                console.log('R');
                start = 'r';
                end = 's';
                this.rList = null;
                }
            else if(startLetter === 'S'){
                console.log('S');
                start = 's';
                end = 't';
                this.sList = null;
                }
            else if(startLetter === 'T'){
                console.log('T');
                start = 't';
                end = 'u';
                this.tList = null;
                }
            else if(startLetter === 'U'){
                console.log('U');
                start = 'u';
                end = 'v';
                this.uList = null;
                }
            else if(startLetter === 'V'){
                console.log('V');
                start = 'v';
                end = 'w';
                this.vList = null;
                }
            else if(startLetter === 'W'){
                console.log('W');
                start = 'w';
                end = 'zz';
                this.wList = null;
                }
            var action = component.get("c.getAllRHBActive");
            action.setParams({
                                "letterStart" : start,
                                "letterEnd" : end,
                                "ADO_Filter" : component.get("v.selectedADO", "v.value"),
                                "RVP_Filter" : component.get("v.selectedRVP", "v.value"),
                                "DVP_Filter" : component.get("v.selectedDVP", "v.value")
                                });
            return new Promise(function (resolve, reject) {
            action.setCallback(this, function(a){
                var response = a.getReturnValue();
                
                    var repList = response;
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
                }resolve("Resolved");
                    
                });
            $A.enqueueAction(action);
                });
            }
        
        getAllNPSPDPMRows(component, startLetter){
            var start;
            var end;
            var selectedReport = component.find("InputSelectReport").get("v.value");
            if(startLetter === 'A'){
                console.log('A');
                this.processingFinished = false;
                start = 'a';
                end = 'b';
                this.aList = null;
                }
            else if(startLetter === 'B'){
                console.log('B');
                start = 'b';
                end = 'c';
                this.bList = null;
                }
            else if(startLetter === 'C'){
                console.log('C');
                start = 'c';
                end = 'd';
                this.cList = null;
                }
            else if(startLetter === 'D'){
                console.log('D');
                start = 'd';
                end = 'e';
                this.dList = null;
                }
            else if(startLetter === 'E'){
                console.log('E');
                start = 'e';
                end = 'f';
                this.eList = null;
                }
            else if(startLetter === 'F'){
                console.log('F');
                start = 'f';
                end = 'g';
                this.fList = null;
                }
            else if(startLetter === 'G'){
                console.log('G');
                start = 'g';
                end = 'h';
                this.gList = null;
                }
            else if(startLetter === 'H'){
                console.log('H');
                start = 'h';
                end = 'i';
                this.hList = null;
                }
            else if(startLetter === 'I'){
                console.log('I');
                start = 'i';
                end = 'j';
                this.iList = null;
                }
            else if(startLetter === 'J'){
                console.log('J');
                start = 'j';
                end = 'k';
                this.jList = null;
                }
            else if(startLetter === 'K'){
                console.log('K');
                start = 'k';
                end = 'l';
                this.kList = null;
                }
            else if(startLetter === 'L'){
                console.log('L');
                start = 'l';
                end = 'm';
                this.lList = null;
                }
            else if(startLetter === 'M'){
                console.log('M');
                start = 'm';
                end = 'n';
                this.mList = null;
                }
            else if(startLetter === 'N'){
                console.log('N');
                start = 'n';
                end = 'o';
                this.nList = null;
                }
            else if(startLetter === 'O'){
                console.log('O');
                start = 'o';
                end = 'p';
                this.oList = null;
                }
            else if(startLetter === 'P'){
                console.log('P');
                start = 'p';
                end = 'q';
                this.pList = null;
                }
            else if(startLetter === 'Q'){
                console.log('Q');
                start = 'q';
                end = 'r';
                this.qList = null;
                }
            else if(startLetter === 'R'){
                console.log('R');
                start = 'r';
                end = 's';
                this.rList = null;
                }
            else if(startLetter === 'S'){
                console.log('S');
                start = 's';
                end = 't';
                this.sList = null;
                }
            else if(startLetter === 'T'){
                console.log('T');
                start = 't';
                end = 'u';
                this.tList = null;
                }
            else if(startLetter === 'U'){
                console.log('U');
                start = 'u';
                end = 'v';
                this.uList = null;
                }
            else if(startLetter === 'V'){
                console.log('V');
                start = 'v';
                end = 'w';
                this.vList = null;
                }
            else if(startLetter === 'W'){
                console.log('W');
                start = 'w';
                end = 'zz';
                this.wList = null;
                }
            if(selectedReport.includes("PDPM")){
                var action = component.get("c.getPDPMTasks");
                }
            else{
                var action = component.get("c.getNPSTasks");
                }
            action.setParams({
                                "letterStart" : start,
                                "letterEnd" : end,
                                "ADO_Filter" : component.get("v.selectedADO", "v.value"),
                                "RVP_Filter" : component.get("v.selectedRVP", "v.value"),
                                "DVP_Filter" : component.get("v.selectedDVP", "v.value"),
                                "reportName" : selectedReport
                                });
            return new Promise(function (resolve, reject) {
            action.setCallback(this, function(a){
                var response = a.getReturnValue();
                
                    var repList = response;
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
                }resolve("Resolved");
                    
                });
            $A.enqueueAction(action);
                });
            }
        
        convertArrayOfObjectsToCSVNPS(objectRecords){
            // declare variables
            var csvStringResult, counter, keys, columnDivider, lineDivider;
            console.log('objectRecords Processing PDPM: ' + objectRecords);
            // check if "objectRecords" parameter is null, then return from function
            if (objectRecords == null || !objectRecords.length){
                return null;
                 }
            // store ,[comma] in columnDivider variabel for sparate CSV values and 
            // for start next line use '\n' [new line] in lineDivider varaible  
            columnDivider = ',';
            lineDivider =  '\n';
     
            // in the keys valirable store fields API Names as a key 
            // this labels use in CSV file header  
            keys = ['Name','Title','Email', 'Account', 'Product Type', 'Start Date', 'Last Date of Service', 'SAP', 'SMART', 'Assigned', 'Subject', 'NPS Score', 'Date', 'Priority', 'Status', 'Full Comments', 'Last Modified Date', 'Company/Account', 'Contact'];
            
            csvStringResult = '';
            csvStringResult += keys.join(columnDivider);
            csvStringResult += lineDivider;
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
                  // add , [comma] after every String value,. [except first]
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
                  // add , [comma] after every String value,. [except first]
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
               }// outer main for loop close 
               // return the CSV formate String 
            return csvStringResult;        
            }
    
}