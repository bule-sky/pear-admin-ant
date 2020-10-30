const getters = {
	layout: state => state.layout.layout,
	theme: state => state.layout.theme,
	menuModel: state => state.layout.layout == "headMenu"?"horizontal":"inline",
	collapsed: state => state.layout.collapsed,

	settingVisible: state => state.layout.setting.opened,
	logo: state => state.layout.logo,
	tab: state => state.layout.tab,
	routerActive: state => state.layout.routerActive,
	selectKey: state => state.layout.selectKey,
	openKey: state => state.layout.openKey,
	activeKey: state => state.layout.activeKey,
	panes: state => state.layout.panes,
	fullscreen: state => state.layout.fullscreen,
	sideWitch: state => state.layout.sideWitch,
	language: state => state.layout.language,
	languages: state => state.layout.languages
};
export default getters;
