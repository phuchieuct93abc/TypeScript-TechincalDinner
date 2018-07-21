[Ivy]
164BD44A26CC999A 3.20 #module
>Proto >Proto Collection #zClass
St0 Start Big #zClass
St0 B #cInfo
St0 #process
St0 @TextInP .resExport .resExport #zField
St0 @TextInP .type .type #zField
St0 @TextInP .processKind .processKind #zField
St0 @AnnotationInP-0n ai ai #zField
St0 @MessageFlowInP-0n messageIn messageIn #zField
St0 @MessageFlowOutP-0n messageOut messageOut #zField
St0 @TextInP .xml .xml #zField
St0 @TextInP .responsibility .responsibility #zField
St0 @StartRequest f0 '' #zField
St0 @EndTask f1 '' #zField
St0 @PushWFArc f2 '' #zField
>Proto St0 St0 Start #zField
St0 f0 outLink start.ivp #txt
St0 f0 type test.Data #txt
St0 f0 inParamDecl '<> param;' #txt
St0 f0 actionDecl 'test.Data out;
' #txt
St0 f0 guid 164BD44A325DAA04 #txt
St0 f0 requestEnabled true #txt
St0 f0 triggerEnabled false #txt
St0 f0 callSignature start() #txt
St0 f0 caseData businessCase.attach=true #txt
St0 f0 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>start.ivp</name>
    </language>
</elementInfo>
' #txt
St0 f0 @C|.responsibility Everybody #txt
St0 f0 81 49 30 30 -21 17 #rect
St0 f0 @|StartRequestIcon #fIcon
St0 f1 type test.Data #txt
St0 f1 337 49 30 30 0 15 #rect
St0 f1 @|EndIcon #fIcon
St0 f2 111 64 337 64 #arcP
>Proto St0 .type test.Data #txt
>Proto St0 .processKind NORMAL #txt
>Proto St0 0 0 32 24 18 0 #rect
>Proto St0 @|BIcon #fIcon
St0 f0 mainOut f2 tail #connect
St0 f2 head f1 mainIn #connect
