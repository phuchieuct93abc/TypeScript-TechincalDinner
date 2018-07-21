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
St0 @RichDialog f3 '' #zField
St0 @PushWFArc f4 '' #zField
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
St0 f3 targetWindow NEW #txt
St0 f3 targetDisplay TOP #txt
St0 f3 richDialogId typescript.Demo #txt
St0 f3 startMethod start() #txt
St0 f3 type test.Data #txt
St0 f3 requestActionDecl '<> param;' #txt
St0 f3 responseActionDecl 'test.Data out;
' #txt
St0 f3 responseMappingAction 'out=in;
' #txt
St0 f3 isAsynch false #txt
St0 f3 isInnerRd false #txt
St0 f3 userContext '* ' #txt
St0 f3 168 42 112 44 0 -8 #rect
St0 f3 @|RichDialogIcon #fIcon
St0 f4 expr out #txt
St0 f4 111 64 168 64 #arcP
St0 f2 expr out #txt
St0 f2 280 64 337 64 #arcP
>Proto St0 .type test.Data #txt
>Proto St0 .processKind NORMAL #txt
>Proto St0 0 0 32 24 18 0 #rect
>Proto St0 @|BIcon #fIcon
St0 f0 mainOut f4 tail #connect
St0 f4 head f3 mainIn #connect
St0 f3 mainOut f2 tail #connect
St0 f2 head f1 mainIn #connect
