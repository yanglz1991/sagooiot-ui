import { RouteRecordRaw } from 'vue-router';

/**
 * 路由meta对象参数说明
 * meta: {
 *      title:          菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 *      isLink：        是否超链接菜单，开启外链条件，`1、isLink:true 2、链接地址不为空`
 *      isHide：        是否隐藏此路由
 *      isKeepAlive：   是否缓存组件状态
 *      isAffix：       是否固定在 tagsView 栏上
 *      isIframe：      是否内嵌窗口，，开启条件，`1、isIframe:true 2、链接地址不为空`
 *      roles：         当前路由权限标识，取角色管理。控制路由显示、隐藏。超级管理员：admin 普通角色：common
 *      icon：          菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * }
 */

/**
 * 定义动态路由
 * @description 未开启 isRequestRoutes 为 true 时使用（前端控制路由），开启时第一个顶级 children 的路由将被替换成接口请求回来的路由数据
 * @description 各字段请查看 `/@/views/system/menu/component/addMenu.vue 下的 ruleForm`
 * @returns 返回路由菜单数据
 */
export const dynamicRoutes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: '/',
		component: () => import('/@/layout/index.vue'),
		redirect: '/home',
		meta: {
			isKeepAlive: true,
		},
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('/@/views/home/index.vue'),
				meta: {
					title: 'message.router.home',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: true,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-shouye',
				},
			},
			{
				path: '/personal',
				name: 'personal',
				component: () => import('/@/views/personal/index.vue'),
				meta: {
					title: 'message.router.personal',
					isLink: '',
					isHide: true,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-gerenzhongxin',
				},
			},
			{
				path: '/404',
				name: 'notFound',
				component: () => import('/@/views/error/404.vue'),
				meta: {
					title: 'message.staticRoutes.notFound',
					isLink: '',
					isHide: true,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
				},
			},
			{
				path: '/401',
				name: 'noPower',
				component: () => import('/@/views/error/401.vue'),
				meta: {
					title: 'message.staticRoutes.noPower',
					isLink: '',
					isHide: true,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
				},
			},
		],
	},
];

export const demoRoutes:Array<RouteRecordRaw> = [
	{
		path: '/demo',
		name: 'demo',
		component: () => import('/@/layout/routerView/parent.vue'),
		redirect: '/demo/system/menu',
		meta: {
			title: '案例演示',
			isLink: '',
			isHide: false,
			isKeepAlive: true,
			isAffix: false,
			isIframe: false,
			roles: ['admin'],
			icon: 'iconfont icon-diannao',
		},
		children: [
			{
				path: '/demo/menu',
				name: 'menu',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/menu/menu1',
				meta: {
					title: 'message.router.menu',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-caidan',
				},
				children: [
					{
						path: '/demo/menu/menu1',
						name: 'menu1',
						component: () => import('/@/layout/routerView/parent.vue'),
						redirect: '/menu/menu1/menu11',
						meta: {
							title: 'message.router.menu1',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-caidan',
						},
						children: [
							{
								path: '/demo/menu/menu1/menu11',
								name: 'menu11',
								component: () => import('/@/views/menu/menu1/menu11/index.vue'),
								meta: {
									title: 'message.router.menu11',
									isLink: '',
									isHide: false,
									isKeepAlive: true,
									isAffix: false,
									isIframe: false,
									roles: ['admin', 'common'],
									icon: 'iconfont icon-caidan',
								},
							},
							{
								path: '/demo/menu/menu1/menu12',
								name: 'menu12',
								component: () => import('/@/layout/routerView/parent.vue'),
								redirect: '/menu/menu1/menu12/menu121',
								meta: {
									title: 'message.router.menu12',
									isLink: '',
									isHide: false,
									isKeepAlive: true,
									isAffix: false,
									isIframe: false,
									roles: ['admin', 'common'],
									icon: 'iconfont icon-caidan',
								},
								children: [
									{
										path: '/demo/menu/menu1/menu12/menu121',
										name: 'menu121',
										component: () => import('/@/views/menu/menu1/menu12/menu121/index.vue'),
										meta: {
											title: 'message.router.menu121',
											isLink: '',
											isHide: false,
											isKeepAlive: true,
											isAffix: false,
											isIframe: false,
											roles: ['admin', 'common'],
											icon: 'iconfont icon-caidan',
										},
									},
									{
										path: '/demo/menu/menu1/menu12/menu122',
										name: 'menu122',
										component: () => import('/@/views/menu/menu1/menu12/menu122/index.vue'),
										meta: {
											title: 'message.router.menu122',
											isLink: '',
											isHide: false,
											isKeepAlive: true,
											isAffix: false,
											isIframe: false,
											roles: ['admin', 'common'],
											icon: 'iconfont icon-caidan',
										},
									},
								],
							},
							{
								path: '/demo/menu/menu1/menu13',
								name: 'menu13',
								component: () => import('/@/views/menu/menu1/menu13/index.vue'),
								meta: {
									title: 'message.router.menu13',
									isLink: '',
									isHide: false,
									isKeepAlive: true,
									isAffix: false,
									isIframe: false,
									roles: ['admin', 'common'],
									icon: 'iconfont icon-caidan',
								},
							},
						],
					},
					{
						path: '/demo/menu/menu2',
						name: 'menu2',
						component: () => import('/@/views/menu/menu2/index.vue'),
						meta: {
							title: 'message.router.menu2',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-caidan',
						},
					},
				],
			},
			{
				path: '/demo/fun',
				name: 'funIndex',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/fun/tagsView',
				meta: {
					title: 'message.router.funIndex',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-crew_feature',
				},
				children: [
					{
						path: '/demo/fun/tagsView',
						name: 'funTagsView',
						component: () => import('/@/views/fun/tagsView/index.vue'),
						meta: {
							title: 'message.router.funTagsView',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'ele-Pointer',
						},
					},
					{
						path: '/demo/fun/countup',
						name: 'funCountup',
						component: () => import('/@/views/fun/countup/index.vue'),
						meta: {
							title: 'message.router.funCountup',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'ele-Odometer',
						},
					},
					{
						path: '/demo/fun/wangEditor',
						name: 'funWangEditor',
						component: () => import('/@/views/fun/wangEditor/index.vue'),
						meta: {
							title: 'message.router.funWangEditor',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-fuwenbenkuang',
						},
					},
					{
						path: '/demo/fun/cropper',
						name: 'funCropper',
						component: () => import('/@/views/fun/cropper/index.vue'),
						meta: {
							title: 'message.router.funCropper',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-caijian',
						},
					},
					{
						path: '/demo/fun/qrcode',
						name: 'funQrcode',
						component: () => import('/@/views/fun/qrcode/index.vue'),
						meta: {
							title: 'message.router.funQrcode',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-ico',
						},
					},
					{
						path: '/demo/fun/echartsMap',
						name: 'funEchartsMap',
						component: () => import('/@/views/fun/echartsMap/index.vue'),
						meta: {
							title: 'message.router.funEchartsMap',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-ditu',
						},
					},
					{
						path: '/demo/fun/printJs',
						name: 'funPrintJs',
						component: () => import('/@/views/fun/printJs/index.vue'),
						meta: {
							title: 'message.router.funPrintJs',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'ele-Printer',
						},
					},
					{
						path: '/demo/fun/clipboard',
						name: 'funClipboard',
						component: () => import('/@/views/fun/clipboard/index.vue'),
						meta: {
							title: 'message.router.funClipboard',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'ele-DocumentCopy',
						},
					},
					{
						path: '/demo/fun/gridLayout',
						name: 'funGridLayout',
						component: () => import('/@/views/fun/gridLayout/index.vue'),
						meta: {
							title: 'message.router.funGridLayout',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-tuodong',
						},
					},
					{
						path: '/demo/fun/splitpanes',
						name: 'funSplitpanes',
						component: () => import('/@/views/fun/splitpanes/index.vue'),
						meta: {
							title: 'message.router.funSplitpanes',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon--chaifenlie',
						},
					},
				],
			},
			{
				path: '/demo/pages',
				name: 'pagesIndex',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/pages/filtering',
				meta: {
					title: 'message.router.pagesIndex',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-fuzhiyemian',
				},
				children: [
					{
						path: '/demo/pages/filtering',
						name: 'pagesFiltering',
						component: () => import('/@/views/pages/filtering/index.vue'),
						meta: {
							title: 'message.router.pagesFiltering',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'ele-Sell',
						},
						/**
						 * 注意此处详情写法：
						 * 1、嵌套进父级里时，面包屑显示为：首页/页面/过滤筛选组件/过滤筛选组件详情
						 * 2、不嵌套进父级时，面包屑显示为：首页/页面/过滤筛选组件/过滤筛选组件详情
						 * 3、想要父级不高亮，面包屑显示为：首页/页面/过滤筛选组件详情，设置路径为：/pages/filteringDetails
						 */
						children: [
							{
								path: '/demo/pages/filtering/details',
								name: 'pagesFilteringDetails',
								component: () => import('/@/views/pages/filtering/details.vue'),
								meta: {
									title: 'message.router.pagesFilteringDetails',
									isLink: '',
									isHide: true,
									isKeepAlive: false,
									isAffix: false,
									isIframe: false,
									roles: ['admin', 'common'],
									icon: 'ele-Sunny',
								},
							},
						],
					},
					{
						path: '/demo/pages/filtering/details1',
						name: 'pagesFilteringDetails1',
						component: () => import('/@/views/pages/filtering/details1.vue'),
						meta: {
							title: 'message.router.pagesFilteringDetails1',
							isLink: '',
							isHide: true,
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'ele-Sunny',
						},
					},
					{
						path: '/demo/pages/iocnfont',
						name: 'pagesIocnfont',
						component: () => import('/@/views/pages/iocnfont/index.vue'),
						meta: {
							title: 'message.router.pagesIocnfont',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'ele-Present',
						},
					},
					{
						path: '/demo/pages/element',
						name: 'pagesElement',
						component: () => import('/@/views/pages/element/index.vue'),
						meta: {
							title: 'message.router.pagesElement',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'ele-Eleme',
						},
					},
					{
						path: '/demo/pages/awesome',
						name: 'pagesAwesome',
						component: () => import('/@/views/pages/awesome/index.vue'),
						meta: {
							title: 'message.router.pagesAwesome',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'ele-SetUp',
						},
					},
					{
						path: '/demo/pages/formAdapt',
						name: 'pagesFormAdapt',
						component: () => import('/@/views/pages/formAdapt/index.vue'),
						meta: {
							title: 'message.router.pagesFormAdapt',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-biaodan',
						},
					},
					{
						path: '/demo/pages/tableRules',
						name: 'pagesTableRules',
						component: () => import('/@/views/pages/tableRules/index.vue'),
						meta: {
							title: 'message.router.pagesTableRules',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-jiliandongxuanzeqi',
						},
					},
					{
						path: '/demo/pages/formI18n',
						name: 'pagesFormI18n',
						component: () => import('/@/views/pages/formI18n/index.vue'),
						meta: {
							title: 'message.router.pagesFormI18n',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-diqiu',
						},
					},
					{
						path: '/demo/pages/formRules',
						name: 'pagesFormRules',
						component: () => import('/@/views/pages/formRules/index.vue'),
						meta: {
							title: 'message.router.pagesFormRules',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-shuxing',
						},
					},
					{
						path: '/demo/pages/listAdapt',
						name: 'pagesListAdapt',
						component: () => import('/@/views/pages/listAdapt/index.vue'),
						meta: {
							title: 'message.router.pagesListAdapt',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-chazhaobiaodanliebiao',
						},
					},
					{
						path: '/demo/pages/waterfall',
						name: 'pagesWaterfall',
						component: () => import('/@/views/pages/waterfall/index.vue'),
						meta: {
							title: 'message.router.pagesWaterfall',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-zidingyibuju',
						},
					},
					{
						path: '/demo/pages/steps',
						name: 'pagesSteps',
						component: () => import('/@/views/pages/steps/index.vue'),
						meta: {
							title: 'message.router.pagesSteps',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-step',
						},
					},
					{
						path: '/demo/pages/preview',
						name: 'pagesPreview',
						component: () => import('/@/views/pages/preview/index.vue'),
						meta: {
							title: 'message.router.pagesPreview',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-15tupianyulan',
						},
					},
					{
						path: '/demo/pages/waves',
						name: 'pagesWaves',
						component: () => import('/@/views/pages/waves/index.vue'),
						meta: {
							title: 'message.router.pagesWaves',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-bolangneng',
						},
					},
					{
						path: '/demo/pages/tree',
						name: 'pagesTree',
						component: () => import('/@/views/pages/tree/index.vue'),
						meta: {
							title: 'message.router.pagesTree',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-shuxingtu',
						},
					},
					{
						path: '/demo/pages/drag',
						name: 'pagesDrag',
						component: () => import('/@/views/pages/drag/index.vue'),
						meta: {
							title: 'message.router.pagesDrag',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'ele-Pointer',
						},
					},
					{
						path: '/demo/pages/lazyImg',
						name: 'pagesLazyImg',
						component: () => import('/@/views/pages/lazyImg/index.vue'),
						meta: {
							title: 'message.router.pagesLazyImg',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'ele-PictureFilled',
						},
					},
					{
						path: '/demo/pages/dynamicForm',
						name: 'pagesDynamicForm',
						component: () => import('/@/views/pages/dynamicForm/index.vue'),
						meta: {
							title: 'message.router.pagesDynamicForm',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'iconfont icon-diannao',
						},
					},
					{
						path: '/demo/pages/workflow',
						name: 'pagesWorkflow',
						component: () => import('/@/views/pages/workflow/index.vue'),
						meta: {
							title: 'message.router.pagesWorkflow',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'ele-Connection',
						},
					},
				],
			},
			{
				path: '/demo/make',
				name: 'makeIndex',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/make/selector',
				meta: {
					title: 'message.router.makeIndex',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin'],
					icon: 'iconfont icon-siweidaotu',
				},
				children: [
					{
						path: '/demo/make/selector',
						name: 'makeSelector',
						component: () => import('/@/views/make/selector/index.vue'),
						meta: {
							title: 'message.router.makeSelector',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-xuanzeqi',
						},
					},
					{
						path: '/demo/make/noticeBar',
						name: 'makeNoticeBar',
						component: () => import('/@/views/make/noticeBar/index.vue'),
						meta: {
							title: 'message.router.makeNoticeBar',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'ele-Bell',
						},
					},
					{
						path: '/demo/make/svgDemo',
						name: 'makeSvgDemo',
						component: () => import('/@/views/make/svgDemo/index.vue'),
						meta: {
							title: 'message.router.makeSvgDemo',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'fa fa-thumbs-o-up',
						},
					},
				],
			},
			{
				path: '/demo/params',
				name: 'paramsIndex',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/params/common',
				meta: {
					title: 'message.router.paramsIndex',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin'],
					icon: 'iconfont icon-zhongduancanshu',
				},
				children: [
					{
						path: '/demo/params/common',
						name: 'paramsCommon',
						component: () => import('/@/views/params/common/index.vue'),
						meta: {
							title: 'message.router.paramsCommon',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'iconfont icon-putong',
						},
					},
					{
						path: '/demo/params/common/details',
						name: 'paramsCommonDetails',
						component: () => import('/@/views/params/common/details.vue'),
						meta: {
							title: 'message.router.paramsCommonDetails',
							isLink: '',
							isHide: true,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'ele-Comment',
						},
					},
					{
						path: '/demo/params/dynamic',
						name: 'paramsDynamic',
						component: () => import('/@/views/params/dynamic/index.vue'),
						meta: {
							title: 'message.router.paramsDynamic',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'iconfont icon-dongtai',
						},
					},
					{
						path: '/demo/params/dynamic/details/:t/:id',
						name: 'paramsDynamicDetails',
						component: () => import('/@/views/params/dynamic/details.vue'),
						meta: {
							title: 'message.router.paramsDynamicDetails',
							isLink: '',
							isHide: true,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'ele-Lightning',
						},
					},
				],
			},
			{
				path: '/demo/visualizing',
				name: 'visualizingIndex',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/visualizing/visualizingLinkDemo1',
				meta: {
					title: 'message.router.visualizingIndex',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin'],
					icon: 'ele-ChatLineRound',
				},
				children: [
					{
						path: '/demo/visualizing/visualizingLinkDemo1',
						name: 'visualizingLinkDemo1',
						component: () => import('/@/layout/routerView/link.vue'),
						meta: {
							title: 'message.router.visualizingLinkDemo1',
							isLink: `./#/visualizingDemo1`,
							isHide: false,
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'iconfont icon-caozuo-wailian',
						},
					},
					{
						path: '/demo/visualizing/visualizingLinkDemo2',
						name: 'visualizingLinkDemo2',
						component: () => import('/@/layout/routerView/link.vue'),
						meta: {
							title: 'message.router.visualizingLinkDemo2',
							isLink: `./#/visualizingDemo2`,
							isHide: false,
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'iconfont icon-caozuo-wailian',
						},
					},
				],
			},
			{
				path: '/demo/chart',
				name: 'chartIndex',
				component: () => import('/@/views/chart/index.vue'),
				meta: {
					title: 'message.router.chartIndex',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-ico_shuju',
				},
			},
			{
				path: '/demo/tools',
				name: 'tools',
				component: () => import('/@/views/tools/index.vue'),
				meta: {
					title: 'message.router.tools',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-gongju',
				},
			},
			{
				path: '/demo/link',
				name: 'layoutLinkView',
				component: () => import('/@/layout/routerView/link.vue'),
				meta: {
					title: 'message.router.layoutLinkView',
					isLink: 'https://element-plus.gitee.io/#/zh-CN/component/installation',
					isHide: false,
					isKeepAlive: false,
					isAffix: false,
					isIframe: false,
					roles: ['admin'],
					icon: 'iconfont icon-caozuo-wailian',
				},
			},
			{
				path: '/demo/iframes',
				name: 'layoutIfameView',
				component: () => import('/@/layout/routerView/iframes.vue'),
				meta: {
					title: 'message.router.layoutIfameView',
					isLink: 'https://nodejs.org/zh-cn/',
					isHide: false,
					isKeepAlive: false,
					isAffix: false,
					isIframe: true,
					roles: ['admin'],
					icon: 'iconfont icon-neiqianshujuchucun',
				},
			},
		],
	},
]

/**
 * 定义静态路由
 * @description 前端控制直接改 dynamicRoutes 中的路由，后端控制不需要修改，请求接口路由数据时，会覆盖 dynamicRoutes 第一个顶级 children 的内容（全屏，不包含 layout 中的路由出口）
 * @returns 返回路由菜单数据
 */
export const staticRoutes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: 'login',
		component: () => import('/@/views/login/index.vue'),
		meta: {
			title: '登录',
		},
	},
	/**
	 * 提示：写在这里的为全屏界面，不建议写在这里
	 * 请写在 `dynamicRoutes` 路由数组中
	 */
	{
		path: '/visualizingDemo1',
		name: 'visualizingDemo1',
		component: () => import('/@/views/visualizing/demo1.vue'),
		meta: {
			title: 'message.router.visualizingLinkDemo1',
		},
	},
	{
		path: '/visualizingDemo2',
		name: 'visualizingDemo2',
		component: () => import('/@/views/visualizing/demo2.vue'),
		meta: {
			title: 'message.router.visualizingLinkDemo2',
		},
	},
	{
		path: '/dbInit',
		name: 'dbInit',
		component: () => import('/@/views/dbInit/index.vue'),
		meta: {
			title: '系统初始化',
		},
	},
];
