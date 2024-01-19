trigger OpportunityTrigger on Opportunity (before insert, after Insert, before update) {
    if(Trigger.isInsert && Trigger.isBefore){
        OpportunityTriggerHandler.onBeforeInsert(Trigger.new);
    }
}