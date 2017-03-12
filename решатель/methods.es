 ----------------------------------------------------------------------------------------------------
ENVY/Packager R4.0 Methods With Rules By Class Statistics

Image:	solver324-VUE.icx

Description:
		Create a stand alone, reduced, run-time image that utilizes 
		the window system and NLS. 
		 
		Use these instructions to produce a non-IC image with the 
		minimal memory footprint. 
		
Time:		(31.08.2013 23:19:11)
 ----------------------------------------------------------------------------------------------------

Act
	#actConditions
		- -Applied Rules- -
			include Act>>#actConditions
	#actObject
		- -Applied Rules- -
			include Act>>#actObject
	#actSubject
		- -Applied Rules- -
			include Act>>#actSubject
	#componentList
		- -Applied Rules- -
			include Act>>#componentList
	#conditionsList
		- -Applied Rules- -
			include Act>>#conditionsList
	#effect
		- -Applied Rules- -
			include Act>>#effect
	#effectList
		- -Applied Rules- -
			include Act>>#effectList
	#getCondition:
		- -Applied Rules- -
			include Act>>#getCondition:
	#getEffect:
		- -Applied Rules- -
			include Act>>#getEffect:
	#refreshFactNames
		- -Applied Rules- -
			include Act>>#refreshFactNames

Application
	#abtViewApplicationPackage
		- -Applied Rules- -
			replace Application class>>#abtViewApplicationPackage with: Application class>>#abtEpViewApplicationPackage

CgScreen
	#bitmapPath:
		- -Unsatisfied Rules- -
			include CgScreen class>>#bitmapPath:
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'

CommonWidgets
	#reinitialize
		- -Unsatisfied Rules- -
			include CommonWidgets class>>#reinitialize
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'

CwAccelerator
	#printOn:
		- -Applied Rules- -
			exclude CwAccelerator>>#printOn:

CwAppContext
	#initializeSystem
		- -Unsatisfied Rules- -
			include CwAppContext class>>#initializeSystem
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'

CwWidget
	#strictClipping
		- -Unsatisfied Rules- -
			include CwWidget class>>#strictClipping
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'

CwWMShell
	#closeWidget
		- -Applied Rules- -
			replace CwWMShell>>#closeWidget with: CwWMShell>>#epRuntimeCloseWidget

EmSystemConfiguration
	#confirmer
		- -Unsatisfied Rules- -
			include EmSystemConfiguration>>#confirmer
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
	#confirmer:
		- -Unsatisfied Rules- -
			include EmSystemConfiguration>>#confirmer:
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
	#informer
		- -Unsatisfied Rules- -
			include EmSystemConfiguration>>#informer
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
	#informer:
		- -Unsatisfied Rules- -
			include EmSystemConfiguration>>#informer:
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
	#prompter
		- -Unsatisfied Rules- -
			include EmSystemConfiguration>>#prompter
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
	#prompter:
		- -Unsatisfied Rules- -
			include EmSystemConfiguration>>#prompter:
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
	#saveImage
		- -Unsatisfied Rules- -
			include EmSystemConfiguration>>#saveImage
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
	#startUpClass
		- -Unsatisfied Rules- -
			include EmSystemConfiguration>>#startUpClass
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
	#startUpClass:
		- -Unsatisfied Rules- -
			include EmSystemConfiguration>>#startUpClass:
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
	#subsystemType:
		- -Unsatisfied Rules- -
			include EmSystemConfiguration>>#subsystemType:
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'

EsImageStartUp
	#applicationCopyright
		- -Unsatisfied Rules- -
			include EsImageStartUp class>>#applicationCopyright
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
	#applicationName
		- -Unsatisfied Rules- -
			include EsImageStartUp class>>#applicationName
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
	#configurationFileName
		- -Unsatisfied Rules- -
			include EsImageStartUp class>>#configurationFileName
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
	#configurationFileName:
		- -Unsatisfied Rules- -
			include EsImageStartUp class>>#configurationFileName:
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
	#debuggerClass
		- -Unsatisfied Rules- -
			include EsImageStartUp class>>#debuggerClass
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
	#debuggerClass:
		- -Unsatisfied Rules- -
			include EsImageStartUp class>>#debuggerClass:
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
	#walkbackFileName
		- -Unsatisfied Rules- -
			include EsImageStartUp class>>#walkbackFileName
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
	#walkbackFileName:
		- -Unsatisfied Rules- -
			include EsImageStartUp class>>#walkbackFileName:
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'

EsWindowSystemStartUp
	#lagTime
		- -Unsatisfied Rules- -
			include EsWindowSystemStartUp class>>#lagTime
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
	#lagTime:
		- -Unsatisfied Rules- -
			include EsWindowSystemStartUp class>>#lagTime:
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'

Fact
	#correlation
		- -Applied Rules- -
			include Fact>>#correlation
	#exist
		- -Applied Rules- -
			include Fact>>#exist
	#field
		- -Applied Rules- -
			include Fact>>#field
	#field:
		- -Applied Rules- -
			include Fact>>#field:

Locale
	#nlsPath
		- -Unsatisfied Rules- -
			include Locale class>>#nlsPath
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
			include Locale class>>#nlsPath
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
	#nlsPath:
		- -Unsatisfied Rules- -
			include Locale class>>#nlsPath:
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'
			include Locale class>>#nlsPath:
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'

MainObject
	#getProperty:
		- -Applied Rules- -
			include MainObject>>#getProperty:
	#getPropertyNames
		- -Applied Rules- -
			include MainObject>>#getPropertyNames
	#getRelationNames
		- -Applied Rules- -
			include MainObject>>#getRelationNames
	#relations
		- -Applied Rules- -
			include MainObject>>#relations
	#volume
		- -Applied Rules- -
			include MainObject>>#volume

MainShell
	#closeMRP
		- -Applied Rules- -
			include MainShell>>#closeMRP

MainWindow
	#pom
		- -Applied Rules- -
			include MainWindow>>#pom

Object
	#halt
		- -Unsatisfied Rules- -
			include Object>>#halt
			- -condition: '[:aPackager | aPackager isCompilerIncluded]'

Property
	#allValues
		- -Applied Rules- -
			include Property>>#allValues

PropWindow
	#allValues
		- -Applied Rules- -
			include PropWindow>>#allValues

Relation
	#dependence
		- -Applied Rules- -
			include Relation>>#dependence
	#relObject
		- -Applied Rules- -
			include Relation>>#relObject
	#saveName
		- -Applied Rules- -
			include Relation>>#saveName

RelPropCorr
	#correlation
		- -Applied Rules- -
			include RelPropCorr>>#correlation

