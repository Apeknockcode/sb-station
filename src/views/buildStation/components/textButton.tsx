
import {ComponentItemFactory} from "@/components/cli/abstract.ts"
import { createPannelOptions } from "@/components/cli/formTypes.ts";
const MButton = new ComponentItemFactory(
	'button',
	'按钮',
	{
		style: [
			createPannelOptions<FormMap, 'input'>('input', {
				receive: 'text',
				label: '文字',
			}),
			createPannelOptions<FormMap, 'input'>('input', {
				receive: 'textColor',
				label: '文字颜色',
			}),
			createPannelOptions<FormMap, 'input'>('input', {
				receive: 'border',
				label: '边框',
			}),
			createPannelOptions<FormMap, 'input'>('input', {
				receive: 'borderRadius',
				label: '圆角',
			}),
			createPannelOptions<FormMap, 'input'>('input', {
				receive: 'boxShadow',
				label: '盒子阴影',
			}),
			createPannelOptions<FormMap, 'input'>('input', {
				receive: 'backgroundColor',
				label: '背景颜色',
			}),
		],

		fn: [
			createPannelOptions<FormMap, 'switch'>('switch', {
				receive: 'op1',
				label: '改变文本函数',
			}),
		],
		animate: [createPannelOptions<FormMap, 'animateControl'>('animateControl', {})],
		actions: [createPannelOptions<FormMap, 'actionButton'>('actionButton', {})],
	},
	{
		props: {
			text: '按钮',
			sizeData: [100, 30],
			backgroundColor: 'rgba(0,132,255,1)',
			lineHeight: 1,
			borderRadius: 0,
      border:'1px solid #333333',
			op1: false,
			textColor: 'rgba(255,255,255,1)', // 文字颜色
			boxShadow: '2px 2px 5px #333333', // 盒子阴影
			fontData: {
				fontSize: 14,
				textDecoration: 'none',
				fontStyle: 'normal',
				color: 'rgba(255,255,255,1)',
				fontWeight: 'normal',
			},
		},
		width: 100, // 绝对定位元素初始必须有宽高，否则适配会有问题。
		height: 30, // 绝对定位元素初始必须有宽高，否则适配会有问题。
		rotate: {
			canRotate: true,
			value: 0,
		},
		canDrag: true, // false就不能拖
	},
	(data, context, store, config) => {
		console.log('data', data);
		console.log('context', context);
		console.log('store', store);
		console.log('config', config);
		return <ButtonTemp data={data} store={store} context={context} config={config}></ButtonTemp>;
	},
	true
);

export default MButton;