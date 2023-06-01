import{j as p,a as t}from"./jsx-runtime-daf140a7.js";import{T as o}from"./Tooltip-8eb03a31.js";import"./index-a06da399.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";const h={title:"Example/Tooltip",component:o,parameters:{layout:"centered"},argTypes:{}},i={render:e=>p("div",{className:"flex items-center gap-4",children:[t(o,{content:"This tooltip is on top of its trigger",...e,children:t("span",{children:"Top"})}),t(o,{side:"right",content:"This tooltip is at the right side its trigger",...e,children:t("span",{children:"Right"})}),t(o,{side:"bottom",content:"This tooltip is at the bottom its trigger",...e,children:t("span",{children:"Bottom"})}),t(o,{side:"left",content:"This tooltip is at the left side its trigger",...e,children:t("span",{children:"Left"})})]})};var n,s,r;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Story) => <div className="flex items-center gap-4">
      <TooltipComponent content="This tooltip is on top of its trigger" {...args}>
        <span>Top</span>
      </TooltipComponent>

      <TooltipComponent side="right" content="This tooltip is at the right side its trigger" {...args}>
        <span>Right</span>
      </TooltipComponent>

      <TooltipComponent side="bottom" content="This tooltip is at the bottom its trigger" {...args}>
        <span>Bottom</span>
      </TooltipComponent>

      <TooltipComponent side="left" content="This tooltip is at the left side its trigger" {...args}>
        <span>Left</span>
      </TooltipComponent>
    </div>
}`,...(r=(s=i.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const g=["Directions"];export{i as Directions,g as __namedExportsOrder,h as default};
//# sourceMappingURL=tooltip-directions.stories-58824a94.js.map
