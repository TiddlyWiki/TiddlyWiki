/***
|''Name:''|RussianTranslationPlugin|
|''Description:''|Translation of TiddlyWiki into Russian|
|''Author:''|VitalyPetrov (v31337 (at) gmail (dot) com)|
|''Author:''|Demid Lupin (v31337 (at) gmail (dot) com)|
|''CodeRepository:''|http://svn.tiddlywiki.org/Trunk/association/locales/core/ru/locale.ru.js |
|''Version:''|0.0.3|
|''Date:''|Nov 12, 2009|
|''Comments:''|Please make comments at http://groups.google.co.uk/group/TiddlyWikiDev |
|''License:''|[[Creative Commons Attribution-ShareAlike 3.0 License|http://creativecommons.org/licenses/by-sa/3.0/]] |
|''~CoreVersion:''|2.5.2|
***/

//{{{
//--
//-- Translateable strings
//--

// Strings in "double quotes" should be translated; strings in 'single quotes' should be left alone

config.locale = "ru"; // W3C language tag

if (config.options.txtUserName == 'YourName') // do not translate this line, but do translate the next line
	merge(config.options,{txtUserName: "���������������"});

merge(config.tasks,{
	save: {text: "���������", tooltip: "��������� ��������� � ������� TiddlyWiki", action: saveChanges},
	sync: {text: "����������������", tooltip: "���������������� ��� ��������� � ������� ������� � ��������� TiddlyWiki", content: '<<sync>>'},
	importTask: {text: "������", tooltip: "������ ������� � ���������� �� ������ ������ � �������� TiddlyWiki", content: '<<importTiddlers>>'},
	tweak: {text: "��������", tooltip: "��������� ������� ��� � ��������� TiddlyWiki", content: '<<options>>'},
	upgrade: {text: "��������", tooltip: "�������� �������� ��� TiddlyWiki", content: '<<upgrade>>'},
	plugins: {text: "����������", tooltip: "���������� �������������� ������������", content: '<<plugins>>'}
});

// Options that can be set in the options panel and/or cookies
merge(config.optionsDesc,{
	txtUserName: "��� ������������ ��� ������� ����� �������",
	chkRegExpSearch: "��������� ������������� ���������� ��������� � ������",
	chkCaseSensitiveSearch: "����� � ������ ��������",
	chkIncrementalSearch: "����� �� ���� ������ ������",
	chkAnimate: "��������� ��������",
	chkSaveBackups: "��������� ��������� ����� ����� ��� ���������� ���������",
	chkAutoSave: "����-���������� ���������",
	chkGenerateAnRssFeed: "������������ ������ RSS-������ ��� ���������� ���������",
	chkSaveEmptyTemplate: "������������� ������ ������ ��� ���������� ���������",
	chkOpenInNewWindow: "��������� ������� ������ � ����� ����",
	chkToggleLinks: "������� �� ������ ��� �������� ������ ��������� ������� � �������� (�� ����� ��� ��������� ���������)",
	chkHttpReadOnly: "��������� �������������� ��� ������� ����� HTTP",
	chkForceMinorUpdate: "�� ��������� ��� ������������ � ���� ��� ��������� ������",
	chkConfirmDelete: "�������� ������ �� ������������� ����� ��������� ������",
	chkInsertTabs: "������������ ������� tab ��� ������� ������� ��������� ������ �������� ����� ������",
	txtBackupFolder: "������� ��� ���������� ��������� �����",
	txtMaxEditRows: "������������ ���������� ����� � ����� ��������������",
    txtTheme: "��� �������������� ����",
	txtFileSystemCharSet: "��������� �� ��������� (������ ��� Firefox/Mozilla)"});

merge(config.messages,{
	customConfigError: "��������� �������� ��� �������� ��������. �������� ������ PluginManager ��� ����� ��������� ��������",
	pluginError: "������: %0",
	pluginDisabled: "���������� �� ����� ����������� ������ ��� ����������� ����� 'systemConfigDisable'",
	pluginForced: "���������� ����� ����������� ������������� ������ ��� ����������� ����� 'systemConfigForce'",
	pluginVersionError: "���������� �� ����� ����������� ��� ��� ������� ������ ������ TiddlyWiki",
	nothingSelected: "������ �� ��������. ������� �� ������ �������� ���� ��� ��������� ��������",
	savedSnapshotError: "������, ��� TiddlyWiki ��� �������� �����������. �������� http://www.tiddlywiki.com/#DownloadSoftware ��� ����� ��������� ��������",
	subtitleUnknown: "(����������)",
	undefinedTiddlerToolTip: "������ '%0' �� ����������",
	shadowedTiddlerToolTip: "������ '%0' �� ����������, �� ����� ��������������� ������� ��������",
	tiddlerLinkTooltip: "%0 - %1, %2",
	externalLinkTooltip: "������� ������ �� %0",
	noTags: "��� ������� � �������� ������",
	notFileUrlError: "�� ������ �������� ������� TiddlyWiki � ���� ����� ����������� ���������",
	cantSaveError: "���������� ��������� ���������. ��������� �������:\n- ��� ������� �� ������������ ���������� (� Firefox, Internet Explorer, Safari � � Opera ���� ��������� ����������)\n- ���� � ������ ����� TiddlyWiki �������� ������������ �������\n- HTML ���� TiddlyWiki ��� ��������� ��� ������������",
	invalidFileError: "���� '%0' �� �������� ����������� TiddlyWiki ������",
	backupSaved: "��������� ����� ���������",
	backupFailed: "������ ���������� ��������� �����",
	rssSaved: "���� RSS-������ �������",
	rssFailed: "������ ���������� ����� � RSS �������",
	emptySaved: "������ ������ �������",
	emptyFailed: "������ ���������� ������� �������",
	mainSaved: "�������� ���� TiddlyWiki �������",
	mainFailed: "������ ���������� ��������� ����� TiddlyWiki. ���� ��������� �� ����� ���������",
	macroError: "������ � ������� <<\%0>>",
	macroErrorDetails: "������ ���������� ������� <<\%0>>:\n%1",
	missingMacro: "��� ��������� �������",
	overwriteWarning: "������ � ������ '%0' ��� ����������. ������� OK ��� � ������",
	unsavedChangesWarning: "��������! ���������� ������������ ��������� � TiddlyWiki\n\n������� OK ��� ����������\n������� CANCEL ��� ������",
	confirmExit: "--------------------------------\n\n���������� ������������ ��������� � TiddlyWiki. ��� ����������� ����� �������� ��� ������������ ���������\n\n--------------------------------",
	saveInstructions: "������������������",
	unsupportedTWFormat: "������ '%0' �� �������������� TiddlyWiki",
	tiddlerSaveError: "������ ���������� ������ '%0'",
	tiddlerLoadError: "������ �������� ������ '%0'",
	wrongSaveFormat: "�� ������ ��������� � ������� '%0'. ����������� ����������� ������ ��� ����������.",
	invalidFieldName: "�������� �������� � ���� %0",
	fieldCannotBeChanged: "���� '%0' �� ����� ���� ��������",
	loadingMissingTiddler: "������� �������� ������ '%0' � ������� '%1':\n\n'%2' � ������� ������� '%3'",
	upgradeDone: "���������� �� ������ %0 ���������\n\n������� 'OK' ��� �������� ���������� ������ TiddlyWiki"});

merge(config.messages.messageClose,{
	text: "�������",
	tooltip: "������� ������ �������������� �������"});

config.messages.backstage = {
	open: {text: "�������������", tooltip: "������� �������������� ������� ��������������"},
	close: {text: "������", tooltip: "������� �������������� �������"},
	prompt: "�������������: ",
	decal: {
		edit: {text: "�������������", tooltip: "������������� ������ '%0'"}
	}
};

config.messages.listView = {
	tiddlerTooltip: "������� ��� ��������� ������ �������",
	previewUnavailable: "(������������ �� ��������������)"
};

config.messages.dates.months = ["������", "�������", "����", "������", "���", "����", "����", "������", "��������", "�������", "������","�������"];
config.messages.dates.days = ["�����������", "�����������", "�������", "�����", "�������", "�������", "�������"];
config.messages.dates.shortMonths = ["���", "���", "���", "���", "���", "���", "���", "���", "���", "���", "���", "���"];
config.messages.dates.shortDays = ["���", "���", "���", "���", "���", "���", "���"];
// suffixes for dates, eg "1st","2nd","3rd"..."30th","31st"
config.messages.dates.daySuffixes = ["��","��","��","��","��","��","��","��","��","��",
		"��","��","��","��","��","��","��","��","��","��",
		"��","��","��","��","��","��","��","��","��","��",
		"st"];
config.messages.dates.am = "��";
config.messages.dates.pm = "��";

merge(config.messages.tiddlerPopup,{
	});

merge(config.views.wikified.tag,{
	labelNoTags: "��� �����",
	labelTags: "�����: ",
	openTag: "������� ����� '%0'",
	tooltip: "�������� ������ ���������� ��� '%0'",
	openAllText: "������� ��",
	openAllTooltip: "������� ��� ��� ������",
	popupNone: "��� ������� � ������ '%0'"});

merge(config.views.wikified,{
	defaultText: "������ '%0' �� ����������. ٸ������ ��� ���� ��� � ��������",
	defaultModifier: "(��������)",
	shadowModifier: "(�������� ������� ������)",
	dateFormat: "DD MMM YYYY", // use this to change the date format for your locale, eg "YYYY MMM DD", do not translate the Y, M or D
	createdPrompt: "�������"});

merge(config.views.editor,{
	tagPrompt: "������� �����, �������� �� ���������, [[��������� ����� �������]] ��� �������������, ��� �������� ������������",
	defaultText: "������� ����� ��� '%0'"});

merge(config.views.editor.tagChooser,{
	text: "�����",
	tooltip: "������� ������������ �����, ��� ���������� � ������� ������",
	popupNone: "��� ����������� �����",
	tagTooltip: "�������� ����� '%0'"});

merge(config.messages,{
	sizeTemplates:
		[
		{unit: 1024*1024*1024, template: "%0\u00a0GB"},
		{unit: 1024*1024, template: "%0\u00a0MB"},
		{unit: 1024, template: "%0\u00a0KB"},
		{unit: 1, template: "%0\u00a0B"}
		]});

merge(config.macros.search,{
	label: "�����",
	prompt: "����� � ������� TiddlyWiki",
	accessKey: "F",
	successMsg: "%0 ������ ������������ %1",
	failureMsg: "��� ������� �������������� %0"});

merge(config.macros.tagging,{
	label: "��������: ",
	labelNotTag: "��� �����",
	tooltip: "������ ������� � ������ '%0'"});

merge(config.macros.timeline,{
	dateFormat: "DD MMM YYYY"});// use this to change the date format for your locale, eg "YYYY MMM DD", do not translate the Y, M or D

merge(config.macros.allTags,{
	tooltip: "�������� ������ � ������ '%0'",
	noTags: "��� ���������� �������"});

config.macros.list.all.prompt = "��� ������ � ���������� �������";
config.macros.list.missing.prompt = "������ �� ������� ��������� ������ ������, �� ��� �� ���� ����������";
config.macros.list.orphans.prompt = "������ �� ������� �� ��������� ������ ������";
config.macros.list.shadowed.prompt = "������� ������ � ���������� �� ���������";
config.macros.list.touched.prompt = "������, ��������� ��������";

merge(config.macros.closeAll,{
	label: "������� ��",
	prompt: "������� ��� �������������� ������ (�������� ������������� � ������ ������)"});

merge(config.macros.permaview,{
	label: "������ ������",
	prompt: "URL-������. ������������ ��� �������� � ������ ������ ������"});

merge(config.macros.saveChanges,{
	label: "��������� ���������",
	prompt: "��������� ��� ������ ��� �������� ����� TiddlyWiki",
	accessKey: "S"});

merge(config.macros.newTiddler,{
	label: "����� ������",
	prompt: "������� ����� ������",
	title: "����� ������",
	accessKey: "N"});

merge(config.macros.newJournal,{
	label: "����� ������ � �������",
	prompt: "������� ����� ������ � �������������� ������� ���� � �������",
	accessKey: "J"});

merge(config.macros.options,{
	wizardTitle: "��������� ����������� �����",
	step1Title: "������ ����� ����� ��������� � cookies ������ ��������",
	step1Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='false' name='chkUnknown'>�������� ����������� �����</input>",
	unknownDescription: "//(����������)//",
	listViewTemplate: {
		columns: [
			{name: 'Option', field: 'option', title: "�����", type: 'String'},
			{name: 'Description', field: 'description', title: "��������", type: 'WikiText'},
			{name: 'Name', field: 'name', title: "���", type: 'String'}
			],
		rowClasses: [
			{className: 'lowlight', field: 'lowlight'}
			]}
	});

merge(config.macros.plugins,{
	wizardTitle: "���������� ������������",
	step1Title: "����������� ������ ����������",
	step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
	skippedText: "(������ ���������� �� ����� ���� ����������, ��� ��� ���� ��������� ����� �������)",
	noPluginText: "��� ������������� ����������",
	confirmDeleteText: "����������� �������� ��������� ����������:\n\n%0",
	removeLabel: "������� ����� systemConfig",
	removePrompt: "������� ����� systemConfig",
	deleteLabel: "�������",
	deletePrompt: "������� ��� ������ ��������",
	listViewTemplate: {
		columns: [
			{name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector'},
			{name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler'},
			{name: 'Description', field: 'Description', title: "Description", type: 'String'},
			{name: 'Version', field: 'Version', title: "Version", type: 'String'},
			{name: 'Size', field: 'size', tiddlerLink: 'size', title: "Size", type: 'Size'},
			{name: 'Forced', field: 'forced', title: "Forced", tag: 'systemConfigForce', type: 'TagCheckbox'},
			{name: 'Disabled', field: 'disabled', title: "Disabled", tag: 'systemConfigDisable', type: 'TagCheckbox'},
			{name: 'Executed', field: 'executed', title: "Loaded", type: 'Boolean', trueText: "Yes", falseText: "No"},
			{name: 'Startup Time', field: 'startupTime', title: "Startup Time", type: 'String'},
			{name: 'Error', field: 'error', title: "Status", type: 'Boolean', trueText: "Error", falseText: "OK"},
			{name: 'Log', field: 'log', title: "Log", type: 'StringList'}
			],
		rowClasses: [
			{className: 'error', field: 'error'},
			{className: 'warning', field: 'warning'}
			]}
	});

merge(config.macros.toolbar,{
	moreLabel: "������",
	morePrompt: "�������� ������ ������",
    lessLabel: "������s",
	lessPrompt: "�������� �������������� �������",
	separator: "|"
	});

merge(config.macros.refreshDisplay,{
	label: "��������",
	prompt: "�������� ��� TiddlyWiki"
	});

merge(config.macros.importTiddlers,{
	readOnlyWarning: "������� ������ � ���� TiddlyWiki ��������� ������ ��� ������. ���������� ������� ���� ����� �������� file://",
	wizardTitle: "������ ������� �� ������� ����� ��� �������",
	step1Title: "��� 1: ������� ������ ��� ���� TiddlyWiki",
	step1Html: "������� ��� �������: <select name='selTypes'><option value=''>�����...</option></select><br>������� URL ��� ���� �����: <input type='text' size=50 name='txtPath'><br>...��� �������� ����: <input type='file' size=50 name='txtBrowse'><br><hr>...��� �������� ��������������� �����: <select name='selFeeds'><option value=''>�����...</option></select>",
	openLabel: "�������",
	openPrompt: "������� ���������� � ������ ������ ��� ��������",
	openError: "��������� �������� ��� �������� tiddlywiki �����",
	statusOpenHost: "��������� ����",
	statusGetWorkspaceList: "�������� ������ ��������� ������� ��������",
	step2Title: "��� 2: ����� ������� ��������",
	step2Html: "������� ��� ������� �������: <input type='text' size=50 name='txtWorkspace'><br>...��� �������� ������� �������: <select name='selWorkspace'><option value=''>�����...</option></select>",
	cancelLabel: "������",
	cancelPrompt: "������ �������",
	statusOpenWorkspace: "��������� ������� �������",
	statusGetTiddlerList: "�������� ������ ��������� �������",
	errorGettingTiddlerList: "������ ��� ��������� ������ ��������� �������, ������� ������ ��� ��������� �������",
	step3Title: "��� 3: �������� ������ ��� �������",
	step3Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='true' name='chkSync'>��������� ����� ������ ������� � ���� ��������, ��� ����������� �������������</input><br><input type='checkbox' name='chkSave'>��������� ���������� �� ���� ������� � ������ 'systemServer' �������:</input> <input type='text' size=25 name='txtSaveTiddler'>",
	importLabel: "������",
	importPrompt: "������ ��������� �������",
	confirmOverwriteText: "������������ ���������� ��������� �������:\n\n%0",
	step4Title: "��� 4: ������ ������ %0",
	step4Html: "<input type='hidden' name='markReport'></input>", // DO NOT TRANSLATE
	doneLabel: "������",
	donePrompt: "������� ������",
	statusDoingImport: "������ �������",
	statusDoneImport: "��� ������ �������������",
	systemServerNamePattern: "%2 �� %1",
	systemServerNamePatternNoWorkspace: "%1",
	confirmOverwriteSaveTiddler: "������ '%0' ��� ����������. ������� 'OK' ��� ���������� � ������ � ���������� �� ���� �������, ��� '������' ��� ������ ��� ���������� ���������",
	serverSaveTemplate: "|''���:''|%0|\n|''URL:''|%1|\n|''������� �������:''|%2|\n\n������ ������ ������� �������������, ��� ���������� ���������� � �������",
	serverSaveModifier: "(�������)",
	listViewTemplate: {
		columns: [
			{name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector'},
			{name: 'Tiddler', field: 'tiddler', title: "������", type: 'Tiddler'},
			{name: 'Size', field: 'size', tiddlerLink: 'size', title: "������", type: 'Size'},
			{name: 'Tags', field: 'tags', title: "�����", type: 'Tags'}
			],
		rowClasses: [
			]}
	});

merge(config.macros.upgrade,{
	wizardTitle: "�������� �������� ��� TiddlyWiki",
	step1Title: "�������� ��� ������������ TiddlyWiki �� ���������� �������",
	step1Html: "�� ����������� �������� �������� ��� TiddlyWiki �� ���������� ������� (�� <a href='%0' class='externalLink' target='_blank'>%1</a>). ���� ������ ����� ��������� ��� ����������<br><br>�������, ��� ��� ���������� ��������� ���� ����� ������ ������������� ������ ����������. ���� � ��� ��������� �������� � ���������� ������, �������� <a href='http://www.tiddlywiki.org/wiki/CoreUpgrades' class='externalLink' target='_blank'>http://www.tiddlywiki.org/wiki/CoreUpgrades</a>",
	errorCantUpgrade: "���������� �������� ������� TiddlyWiki. �� ������� �������� ������ TiddlyWiki ����� ������� �������� � ��� ��������",
	errorNotSaved: "�� ������ ��������� ��� ��������� ����� �����������",
	step2Title: "������������� ������������ ����������",
	step2Html_downgrade: "�� ������� �������� ������ TiddlyWiki �� %0 � %1.<br><br>�������� ������ ��������� ���� �� �������������",
	step2Html_restore: "������ TiddlyWiki ��� ���������� ��������� ������ ��������� ���� (%0).<br><br>��� �� ����� �� ������ ���������� ����������, ��� ����������� ����, ����� �������� ��� �� ��� ��������",
	step2Html_upgrade: "�� ������� �������� TiddlyWiki �� ������ %0 � %1",
	upgradeLabel: "��������",
	upgradePrompt: "���������� � �������� ����������",
	statusPreparingBackup: "���������� � �������� ��������� �����",
	statusSavingBackup: "���������� ����� ��������� �����",
	errorSavingBackup: "��������� �������� ��� ���������� ���� � ��������� ������",
	statusLoadingCore: "�������� ��������� ����",
	errorLoadingCore: "������ �������� ��������� ����",
	errorCoreFormat: "������ � ���������� �������� ����",
	statusSavingCore: "���������� ������������ ��������� ����",
	statusReloadingCore: "������������ ������������ ��������� ����",
	startLabel: "�����",
	startPrompt: "������ ������� ����������",
	cancelLabel: "������",
	cancelPrompt: "������ ����������",
	step3Title: "���������� ��������",
	step3Html: "�� �������� ���������� ���������"
	});

merge(config.macros.sync,{
	listViewTemplate: {
		columns: [
			{name: 'Selected', field: 'selected', rowName: 'title', type: 'Selector'},
			{name: 'Tiddler', field: 'tiddler', title: "������", type: 'Tiddler'},
			{name: 'Server Type', field: 'serverType', title: "��� �������", type: 'String'},
			{name: 'Server Host', field: 'serverHost', title: "��� �������", type: 'String'},
			{name: 'Server Workspace', field: 'serverWorkspace', title: "������� ������� �������", type: 'String'},
			{name: 'Status', field: 'status', title: "������ �������������", type: 'String'},
			{name: 'Server URL', field: 'serverUrl', title: "URL �������", text: "���", type: 'Link'}
			],
		rowClasses: [
			],
		buttons: [
			{caption: "���������������� ��������� ������", name: 'sync'}
			]},
	wizardTitle: "������������� � �������� ��������� � �������",
	step1Title: "�������� ������, ������� �� ������� ����������������",
	step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
	syncLabel: "����������������",
	syncPrompt: "���������������� ��������� ������",
	hasChanged: "�������� ��������",
	hasNotChanged: "��� ��������� ��������",
	syncStatusList: {
		none: {text: "...", color: "������������", display:null},
		changedServer: {text: "��������� �� �������", color: '#8080ff', display:null},
		changedLocally: {text: "�������� ��������", color: '#80ff80', display:null},
		changedBoth: {text: "�������� �������� � �� �������", color: '#ff8080', display:null},
		notFound: {text: "������ �� ������", color: '#ffff80', display:null},
		putToServer: {text: "���������� ������ ��������� �� �������", color: '#ff80ff', display:null},
		gotFromServer: {text: "��������� ���������� � �������", color: '#80ffff', display:null}
		}
	});

merge(config.commands.closeTiddler,{
	text: "�������",
	tooltip: "������� ������ ������"});

merge(config.commands.closeOthers,{
	text: "������� ���������",
	tooltip: "������� ��� ������ ����� ������"});

merge(config.commands.editTiddler,{
	text: "�������������",
	tooltip: "������������� ������",
	readOnlyText: "���",
	readOnlyTooltip: "����������� �������� ������"});

merge(config.commands.saveTiddler,{
	text: "������",
	tooltip: "��������� ������"});

merge(config.commands.cancelTiddler,{
	text: "������",
	tooltip: "�������� ��� ��������� ������",
	warning: "�� ������������� ������ ���������� �� ��������� '%0'?",
	readOnlyText: "������",
	readOnlyTooltip: "�������� ������ � ���������� ������"});

merge(config.commands.deleteTiddler,{
	text: "�������",
	tooltip: "������� ������� ������",
	warning: "�� ������������� ������� ������� ������ '%0'?"});

merge(config.commands.permalink,{
	text: "������ ������",
	tooltip: "������ ������ �� ������ ������"});

merge(config.commands.references,{
	text: "������",
	tooltip: "�������� ������ ����������� �� ������",
	popupNone: "��� ������"});

merge(config.commands.jump,{
	text: "�������",
	tooltip: "������� � ������ �������� ������"});

merge(config.commands.syncing,{
	text: "�������������",
	tooltip: "�������������� ������������� ������ ������ � �������� ��������� � ��������",
	currentlySyncing: "<div>� ��������� ����� ���������������� � <span class='popupHighlight'>'%0'</span> to:</"+"div><div>host: <span class='popupHighlight'>%1</span></"+"div><div>������� �������: <span class='popupHighlight'>%2</span></"+"div>", // Note escaping of closing <div> tag
	notCurrentlySyncing: "�� ���������������� � ��������� �����",
	captionUnSync: "���������� ������������� ������ ������",
	chooseServer: "���������������� ������ ������ � ������ ��������:",
	currServerMarker: "\u25cf ",
	notCurrServerMarker: "  "});

merge(config.commands.fields,{
	text: "����",
	tooltip: "�������� �������������� ���� ������ ������",
	emptyText: "��� ����������� ����� ��� ������ ������",
	listViewTemplate: {
		columns: [
			{name: 'Field', field: 'field', title: "����", type: 'String'},
			{name: 'Value', field: 'value', title: "��������", type: 'String'}
			],
		rowClasses: [
			],
		buttons: [
			]}});

merge(config.shadowTiddlers,{
	DefaultTiddlers: "[[�����������]]",
	MainMenu: "[[�����������]]\n\n\n^^~TiddlyWiki ������ <<version>>\n� 2009 [[UnaMesa|http://www.unamesa.org/]]^^",
	�����������: "����� ������ ������ � ������ TiddlyWiki, �� ������ �������� ��������� ������:\n* SiteTitle & SiteSubtitle: ��������� � ������������ �����, ��� �������� ���� (����� ���������� ��� ����� ����� �������� � ��������� �����)\n* MainMenu: ������� ���� (������ ����������� �����)\n* DefaultTiddlers: ������ ������� �� �� ������ ������ ��� ������� TiddlyWiki\n�� ������ ������ ���� ��� ��� ����������� ������ �������: <<option txtUserName>>",
	SiteTitle: "��� TiddlyWiki",
	SiteSubtitle: "���������� ������������ WEB-�������",
	SiteUrl: "http://www.tiddlywiki.com/",
	OptionsPanel: "������ ��������� ���������� �������� ��������� TiddlyWiki ����������� � ����� ��������\n\n����� ������ ����� ��������� ���� ������. �������� ���, ��� � WikiWord (�������� JoeBloggs)\n<<option txtUserName>>\n\n<<option chkSaveBackups>> ��������� ��������� �����\n<<option chkAutoSave>> ���� ����������\n<<option chkRegExpSearch>> ����� � �������������� ���������� ���������\n<<option chkCaseSensitiveSearch>> ����� � ������ ��������\n<<option chkAnimate>> ��������� ��������\n\n----\n�������� ����� [[����������� ������|AdvancedOptions]]",
	SideBarOptions: '<<search>><<closeAll>><<permaview>><<newTiddler>><<newJournal "DD MMM YYYY" "������">><<saveChanges>><<slider chkSliderOptionsPanel OptionsPanel "����� \u00bb" "�������� ����������� ����� TiddlyWiki">>',
	SideBarTabs: '<<tabs txtMainTab "����������" "����������" TabTimeline "���" "��� ������" TabAll "�����" "��� �����" TabTags "���" "��� ������" TabMore>>',
	TabMore: '<<tabs txtMoreTab "����������" "���������� ������" TabMoreMissing "������" "����������� ������" TabMoreOrphans "�������" "������� ������" TabMoreShadowed>>'
	});

merge(config.annotations,{
	AdvancedOptions: "������ ������ ������������� ������ � ����������� ����������",
	ColorPalette: "������� �������� ������ ������ �� ������� �������� �������� ����� ���������� ~TiddlyWiki",
	DefaultTiddlers: "������ ������������� ����� ������������� ������������ ��� ������� ~TiddlyWiki",
	EditTemplate: "HTML ������ � ���� ������ ���������� ��� ����� ��������� ������ ��� �� ��������������",
	GettingStarted: "����� ����������� ������� ���������� �� ������������� ���������",
	ImportTiddlers: "��������� ��� ������ �� ������� ������������� ������ ������",
	MainMenu: "����� ����������� ���������� �������� ����, ������������� ����� �� ������",
	MarkupPreHead: "��� ������ ����� ��������� � ������� ������ <head> HTML ����� TiddlyWiki",
	MarkupPostHead: "��� ������ ����� ��������� ����� ������ <head> HTML ����� TiddlyWiki",
	MarkupPreBody: "��� ������ ����� ��������� � ������� ������ <body> HTML ����� TiddlyWiki",
	MarkupPostBody: "��� ������ ����� ��������� ����� ������ <body> HTML ����� TiddlyWiki ����� ������ ��������",
	OptionsPanel: "����� ��������� ���������� ���������� ������ ������ ��������",
	PageTemplate: "HTML ������ ������ ���� ������ ���������� ����� ����� ~TiddlyWiki",
	PluginManager: "������ � ������ ���������� ������������",
	SideBarOptions: "��������� ��������������� ���������� ������ ����� ������",
	SideBarTabs: "���������� ������ �������� ������",
	SiteSubtitle: "���������� ������������ �����",
	SiteTitle: "���������� ��������� �����",
	SiteUrl: "URL ����� ��� ����������",
	StyleSheetColors: "���������� CSS ������������ ����� ��������� ��������. ''�� ������������ ��� ������'', ������� ���� ��������� � ������� ������ StyleSheet",
	StyleSheet: "��� ������ ���������� ��������������� CSS",
	StyleSheetLayout: "��������� CSS ������������ ������������ ��������� �� ��������. ''�� ������������ ��� ������'', ������� ���� ��������� � ������� ������ StyleSheet",
	StyleSheetLocale: "�������� CSS ������������ ����������� �������",
	StyleSheetPrint: "�������� CSS ������������ ���������� ������",
	TabAll: "���������� ������� '��' �� ������ �� ������ ������ ������",
	TabMore: "���������� ������� '���' �� ������ �� ������ ������ ������",
	TabMoreMissing: "���������� ������� '����������' �� ������ �� ������ ������ ������",
	TabMoreOrphans: "���������� ������� '������' �� ������ �� ������ ������ ������",
	TabMoreShadowed: "���������� ������� '�������' �� ������ �� ������ ������ ������",
	TabTags: "���������� ������� '�����' �� ������ �� ������ ������ ������",
	TabTimeline: "���������� ������� '����������' �� ������ �� ������ ������ ������",
	ToolbarCommands: "���������� ������� ������ ������������",
	ViewTemplate: "HTML ������ � ���� ������ ���������� ��� ����� ������������ ������"
	});

//}}}
