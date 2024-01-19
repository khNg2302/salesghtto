public with sharing class OpportunityTriggerHandler {
    // before insert
    public static void onBeforeInsert(List<Opportunity> lstNew){
        Set<Id> setAccountId = new Set<Id>();
        for(Opportunity op : lstNew){
            setAccountId.add(op.AccountId);
        }
        //List<Account> lstAccount = [SELECT Id,Name From Account WHERE Id IN :setAccountId];
        Map<Id,Account> mapAccount = new Map<Id,Account>([SELECT Id,Name From Account WHERE Id IN :setAccountId]);
        
        for(Opportunity op : lstNew){
            if(mapAccount.containsKey(op.AccountId)){
                op.Name = mapAccount.get(op.AccountId).Name + op.Name;
            }
        }
        
    }
    // event after insert
    // public static void onAfterInsert(List<Opportunity> lstNew){}
    
}