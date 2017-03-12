 ----------------------------------------------------------------------------------------------------
ENVY/Packager R4.0 Globals Statistics

Image:	solver324-VUE.icx

Description:
		Create a stand alone, reduced, run-time image that utilizes 
		the window system and NLS. 
		 
		Use these instructions to produce a non-IC image with the 
		minimal memory footprint. 
		
Time:		(31.08.2013 23:19:10)
 ----------------------------------------------------------------------------------------------------

Mappings for:  Smalltalk

	AbtCwMsgBase
		include pool dictionary AbtCwMsgBase 
		
		reduce pool dictionary AbtCwMsgBase 
		
	AbtMsgBase
		include pool dictionary AbtMsgBase 
		
		reduce pool dictionary AbtMsgBase 
		
	AbtMsgPrimBase
		include pool dictionary AbtMsgPrimBase 
		
		reduce pool dictionary AbtMsgPrimBase 
		
	AbtMsgThreads
		include pool dictionary AbtMsgThreads 
		
		reduce pool dictionary AbtMsgThreads 
		
	AbtMtNlsStr
		include pool dictionary AbtMtNlsStr 
		
		reduce pool dictionary AbtMtNlsStr 
		
	AbtNlsKrnConstants
		reduce all pool dictionaries 
		
	AbtPrimitiveNLSStrings
		include pool dictionary AbtPrimitiveNLSStrings 
		
		reduce pool dictionary AbtPrimitiveNLSStrings 
		
	AbtRunCommonStrings
		include pool dictionary AbtRunCommonStrings 
		
		reduce pool dictionary AbtRunCommonStrings 
		
	AbtRunViewsStrings
		include pool dictionary AbtRunViewsStrings 
		
		reduce pool dictionary AbtRunViewsStrings 
		
	AbtVaMsgBase
		include pool dictionary AbtVaMsgBase 
		
		reduce pool dictionary AbtVaMsgBase 
		
	AcoConstants
		reduce all pool dictionaries 
		
	CfsConstants
		reduce all pool dictionaries 
		
	FileStream
		include global variable FileStream 
		
	MtErrMsg
		include pool dictionary MtErrMsg 
		
		reduce pool dictionary MtErrMsg 
		
	NlsCatABTpwui
		reduce all pool dictionaries 
		
	NlsCatCFS
		reduce all pool dictionaries 
		
	NlsCatCFSWin
		reduce all pool dictionaries 
		
	NlsCatCG
		reduce all pool dictionaries 
		
	NlsCatCGa
		reduce all pool dictionaries 
		
	NlsCatCGsWin
		reduce all pool dictionaries 
		
	NlsCatCGsWina
		reduce all pool dictionaries 
		
	NlsCatCP
		reduce all pool dictionaries 
		
	NlsCatCPsWin
		reduce all pool dictionaries 
		
	NlsCatCW
		reduce all pool dictionaries 
		
	NlsCatCWa
		reduce all pool dictionaries 
		
	NlsCatCWc
		reduce all pool dictionaries 
		
	NlsCatCWcsPMWin
		reduce all pool dictionaries 
		
	NlsCatCWcsWin
		reduce all pool dictionaries 
		
	NlsCatDDE
		reduce all pool dictionaries 
		
	NlsCatDDEsWin
		reduce all pool dictionaries 
		
	NlsCatESd
		reduce all pool dictionaries 
		
	NlsCatEse
		reduce all pool dictionaries 
		
	NlsCatESTa
		reduce all pool dictionaries 
		
	NlsCatESW
		reduce all pool dictionaries 
		
	NlsCatEW
		reduce all pool dictionaries 
		
	NlsCatEWc
		reduce all pool dictionaries 
		
	NlsCatEWe
		reduce all pool dictionaries 
		
	NlsCatKRN
		reduce all pool dictionaries 
		
	NlsCatNLSa
		reduce all pool dictionaries 
		
	NlsCatOLE
		reduce all pool dictionaries 
		
	Processor
		replace global variable Processor with: ProcessorScheduler 
		new basicInitialize 
		
	System
		replace global variable System with: 
		EmSystemConfiguration new 
			errorLog: Transcript; 
			name: System name; 
			vmType: System vmType; 
			globalNamespace: System globalNamespace; 
			configuredSubsystems: System configuredSubsystems; 
			byteCodeVersion: System byteCodeVersion; 
			epRootOfApplicationHierarchy: System 
		rootOfApplicationHierarchy; 
			classClass: System classClass; 
			metaclassClass: System metaclassClass; 
			yourself 
		
	SystemExceptions
		reduce all pool dictionaries 
		
	Transcript
		replace global variable Transcript with: TranscriptTTY 
		default 
		
	WidgetCreationExtensions
		initialize global variable WidgetCreationExtensions with: 
		Set new 
		
	WidgetInitializationExtensions
		initialize global variable 
		WidgetInitializationExtensions with: Set new 
		
