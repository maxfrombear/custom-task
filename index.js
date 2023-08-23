import { registerBlockExtension } from "@10up/block-components";
import { InspectorControls } from "@wordpress/block-editor";
import { createHigherOrderComponent } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import {
    RangeControl,
    Notice,
    PanelBody,
    PanelRow,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
    __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import { useEffect, createElement } from '@wordpress/element';

export const Path = (props) => createElement('path', props);
export const SVG = (props) => createElement('svg', props);


import "./style.scss";
import "./editor.scss";

const additionalAttributes = {
    hasResponsiveDevice: {
        type: "string",
        default: "Desktop",
    },
    hasResponsiveFlex: {
        type: "string",
        default: "",
    },
    hasResponsiveFlexDirection: {
        type: "string",
        default: "",
    },
    hasResponsiveFlexJustify: {
        type: "string",
        default: "",
    },
    hasResponsiveFlexAlign: {
        type: "string",
        default: "",
    },
    hasResponsiveFlexRowGap: {
        type: "string",
        default: "",
    },
    hasResponsiveFlexColGap: {
        type: "string",
        default: "",
    },
    hasResponsiveFlexGrow: {
        type: "string",
        default: "1",
    },
    hasResponsiveFlexShrink: {
        type: "string",
        default: "",
    },
    hasResponsiveFlexOrder: {
        type: "string",
        default: "",
    },
    hasResponsiveFlexTab: {
        type: "string",
        default: "",
    },
    hasResponsiveFlexDirectionTab: {
        type: "string",
        default: "",
    },
    hasResponsiveFlexJustifyTab: {
        type: "string",
        default: "",
    },
    hasResponsiveFlexAlignTab: {
        type: "string",
        default: "",
    },
    hasResponsiveFlexRowGapTab: {
        type: "string",
        default: "",
    },
    hasResponsiveFlexColGapTab: {
        type: "string",
        default: "",
    },
    hasResponsiveFlexGrowTab: {
        type: "string",
        default: "",
    },
    hasResponsiveFlexShrinkTab: {
        type: "string",
        default: "",
    },
    hasResponsiveFlexOrderTab: {
        type: "string",
        default: "",
    },
};


const BlockEdit = (props) => {
    //Destructuring Props

    const { attributes, setAttributes } = props;
    
    //Attributes Helper Function

    const updateAttribute = (attrName) => (value) => {
        setAttributes({ [attrName]: value });
    };

    // Desktop Variables Setters Start

    const setResponsiveFlex = updateAttribute('hasResponsiveFlex');
    const setResponsiveFlexDirection = updateAttribute('hasResponsiveFlexDirection');
    const setResponsiveFlexJustify = updateAttribute('hasResponsiveFlexJustify');
    const setResponsiveFlexAlign = updateAttribute('hasResponsiveFlexAlign');
    const setResponsiveFlexRowGap = updateAttribute('hasResponsiveFlexRowGap');
    const setResponsiveFlexColGap = updateAttribute('hasResponsiveFlexColGap');
    const setResponsiveFlexGrow = updateAttribute('hasResponsiveFlexGrow');
    const setResponsiveFlexShrink = updateAttribute('hasResponsiveFlexShrink');
    const setResponsiveFlexOrder = updateAttribute('hasResponsiveFlexOrder');
    

    // Desktop Variables Setters End
    //###############################
    // Tablet Variables Setters  Start

    const setResponsiveFlexTab = updateAttribute('hasResponsiveFlexTab');
    const setResponsiveFlexDirectionTab = updateAttribute('hasResponsiveFlexDirectionTab');
    const setResponsiveFlexJustifyTab = updateAttribute('hasResponsiveFlexJustifyTab');
    const setResponsiveFlexAlignTab = updateAttribute('hasResponsiveFlexAlignTab');
    const setResponsiveFlexRowGapTab = updateAttribute('hasResponsiveFlexRowGapTab');
    const setResponsiveFlexColGapTab = updateAttribute('hasResponsiveFlexColGapTab');
    const setResponsiveFlexGrowTab = updateAttribute('hasResponsiveFlexGrowTab');
    const setResponsiveFlexShrinkTab = updateAttribute('hasResponsiveFlexShrinkTab');
    const setResponsiveFlexOrderTab = updateAttribute('hasResponsiveFlexOrderTab');



    // Tablet Variables Setters End
    //###############################
    // Mobile Variables Setters Start


    const currentDeviceType = useSelect((select) => {
        return select('core/edit-post').__experimentalGetPreviewDeviceType();
    }, []);  // The dependency array is empty to ensure the selector is always fresh

    const setResponsiveDevice = (value) => {
        props.setAttributes({ hasResponsiveDevice: value });
    };

    useEffect(() => {
        setResponsiveDevice(currentDeviceType);
    }, [currentDeviceType]);



    return (

        <InspectorControls>
            <PanelBody title="Responsive Tools">

                <PanelRow>
                    <Notice
                        isDismissible={false}
                        className="x-control device-notice"
                        status="warning"
                        politeness="polite"
                    >
                        {`You are currently editing ${props.attributes.hasResponsiveDevice}.`}
                    </Notice>
                </PanelRow>

                {props.attributes.hasResponsiveDevice == "Desktop" && (
                    <PanelRow className="x-control is-block">
                        <ToggleGroupControl
                            isBlock
                            isDeselectable
                            help={"Would you like to enable flexbox on Large screens and above?"}
                            value={props.attributes.hasResponsiveFlex}
                            label="Flexbox"
                            onChange={setResponsiveFlex}
                            className="x-control has-border"
                        >
                            <ToggleGroupControlOption
                                label="Enable"
                                showTooltip
                                value="flex"
                            />
                            <ToggleGroupControlOption
                                label="Disable"
                                showTooltip
                                value=""
                            />
                        </ToggleGroupControl>
                    </PanelRow>)}
                {props.attributes.hasResponsiveDevice == "Desktop" && props.attributes.hasResponsiveFlex && (
                    <PanelRow className="x-control is-block space-top">
                        <ToggleGroupControl
                            __nextHasNoMarginBottom
                            isBlock
                            isDeselectable
                            isAdaptiveWidth={true}
                            value={props.attributes.hasResponsiveFlexDirection}
                            label="Flex Direction"
                            onChange={setResponsiveFlexDirection}
                            className="x-control has-border justify-between"
                        >
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z" /></SVG>}
                                label="Horizontal"
                                value="row"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z" /></SVG>}
                                label="Vertical"
                                value="col"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z" /></SVG>}
                                label="Horizontal Reverse"
                                value="row-reverse"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z" /></SVG>}
                                label="Vertical Reverse"
                                value="col-reverse"
                            />
                        </ToggleGroupControl>
                    </PanelRow>
                )}
                {props.attributes.hasResponsiveDevice == "Desktop" && props.attributes.hasResponsiveFlex && (
                    <PanelRow className="x-control is-block space-top">
                        <ToggleGroupControl
                            __nextHasNoMarginBottom
                            isBlock
                            isDeselectable
                            isAdaptiveWidth={true}
                            value={props.attributes.hasResponsiveFlexJustify}
                            label="Flex Justification"
                            onChange={setResponsiveFlexJustify}
                            className="x-control has-border justify-between"
                        >
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M9 9v6h11V9H9zM4 20h1.5V4H4v16z" /></SVG>}
                                label="Start"
                                value="start"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z" /></SVG>}
                                label="Center"
                                value="center"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z" /></SVG>}
                                label="End"
                                value="end"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M9 15h6V9H9v6zm-5 5h1.5V4H4v16zM18.5 4v16H20V4h-1.5z" /></SVG>}
                                label="Justify Between"
                                value="between"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M4 4H5.5V20H4V4ZM7 10L17 10V14L7 14V10ZM20 4H18.5V20H20V4Z" /></SVG>}
                                label="Justify Around"
                                value="around"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M7 16.5h10V15H7v1.5zm0-9V9h10V7.5H7z" /></SVG>}
                                label="Justify Evently"
                                value="evenly"
                            />
                        </ToggleGroupControl>
                    </PanelRow>
                )}
                {props.attributes.hasResponsiveDevice == "Desktop" && props.attributes.hasResponsiveFlex && (
                    <PanelRow className="x-control is-block space-top">
                        <ToggleGroupControl
                            __nextHasNoMarginBottom
                            isBlock
                            isDeselectable
                            isAdaptiveWidth={true}
                            value={props.attributes.hasResponsiveFlexAlign}
                            label="Flex Align"
                            onChange={setResponsiveFlexAlign}
                            className="x-control has-border justify-between"
                        >
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M 15,9 H 9 v 11 h 6 z M 4,4 V 5.5 H 20 V 4 Z" /></SVG>}
                                label="Start"
                                value="start"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="m 8.75,12.75 h -5 v -1.5 h 5 v -7 h 6 v 7 h 5 v 1.5 h -5 v 7 h -6 z" /></SVG>}
                                label="Center"
                                value="center"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="m 9,15 h 6 V 4 H 9 Z m 11,5 V 18.5 H 4 V 20 Z" /></SVG>}
                                label="End"
                                value="end"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M 20,4 V 5.5 H 4 V 4 Z M 14,7 V 17 H 10 V 7 Z m 6,13 V 18.5 H 4 V 20 Z" /></SVG>}
                                label="Stretch"
                                value="stretch"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="m 9,9 v 6 h 6 V 9 Z m -5,1 v 1.5 H 20 V 10 Z m 16,2.5 H 4 V 14 h 16 z" /></SVG>}
                                label="Baseline"
                                value="baseline"
                            />
                        </ToggleGroupControl>
                    </PanelRow>
                )}
                {props.attributes.hasResponsiveDevice == "Desktop" && props.attributes.hasResponsiveFlex && (
                    <PanelRow className="x-control is-block space-top">
                        <RangeControl
                            label="Row Gap"
                            __nextHasNoMarginBottom
                            help="Please set a row gap. Only works with block.json spacing slug settings."
                            withInputField={false}
                            value={props.attributes.hasResponsiveFlexRowGap}
                            onChange={setResponsiveFlexRowGap}
                            initialPosition={0}
                            allowReset
                            type={[
                                'stepper'
                            ]}
                            marks={{}}
                            max={6}
                            min={0}
                            step={1}
                        />
                    </PanelRow>
                )}
                {props.attributes.hasResponsiveDevice == "Desktop" && props.attributes.hasResponsiveFlex && (
                    <PanelRow className="x-control is-block space-top">
                        <RangeControl
                            label="Column Gap"
                            __nextHasNoMarginBottom
                            help="Please set a column gap. Only works with block.json spacing slug settings."
                            withInputField={false}
                            value={props.attributes.hasResponsiveFlexColGap}
                            onChange={setResponsiveFlexColGap}
                            initialPosition={0}
                            allowReset
                            type={[
                                'stepper'
                            ]}
                            marks={{}}
                            max={6}
                            min={0}
                            step={1}
                        />
                    </PanelRow>
                )}
                {props.attributes.hasResponsiveDevice == "Desktop" && props.attributes.hasResponsiveFlex && (
                    <PanelRow className="x-control is-block space-top">

                        <NumberControl
                            _unstableInputWidth="20em"
                            label="Flex grow"
                            labelPosition="edge"
                            onChange={setResponsiveFlexGrow}
                            step="1"
                            value={props.attributes.hasResponsiveFlexGrow}
                            min="0"
                            max="6"
                        />

                    </PanelRow>
                )}
                {props.attributes.hasResponsiveDevice == "Desktop" && props.attributes.hasResponsiveFlex && (
                    <PanelRow className="x-control is-block space-top">

                        <NumberControl
                            _unstableInputWidth="20em"
                            label="Flex Shrink"
                            labelPosition="edge"
                            onChange={setResponsiveFlexShrink}
                            step="1"
                            value={props.attributes.hasResponsiveFlexShrink}
                            min="0"
                            max="6"
                        />

                    </PanelRow>
                )}
                {props.attributes.hasResponsiveDevice == "Desktop" && props.attributes.hasResponsiveFlex && (
                    <PanelRow className="x-control is-block space-top">

                        <NumberControl
                            _unstableInputWidth="20em"
                            label="Flex order"
                            labelPosition="edge"
                            onChange={setResponsiveFlexOrder}
                            step="1"
                            value={props.attributes.hasResponsiveFlexOrder}
                            min="0"
                            max="6"
                        />

                    </PanelRow>
                )}


                {props.attributes.hasResponsiveDevice == "Tablet" && (
                    <PanelRow className="x-control is-block">
                        <ToggleGroupControl
                            isBlock
                            isDeselectable
                            help={"Would you like to enable flexbox on Medium screens and above?"}
                            value={props.attributes.hasResponsiveFlexTab}
                            label="Flexbox"
                            onChange={setResponsiveFlexTab}
                            className="x-control has-border"
                        >
                            <ToggleGroupControlOption
                                label="Enable"
                                showTooltip
                                value="flex"
                            />
                            <ToggleGroupControlOption
                                label="Disable"
                                showTooltip
                                value=""
                            />
                        </ToggleGroupControl>
                    </PanelRow>)}
                    {props.attributes.hasResponsiveDevice == "Tablet" && props.attributes.hasResponsiveFlexTab && (
                    <PanelRow className="x-control is-block space-top">
                        <ToggleGroupControl
                            __nextHasNoMarginBottom
                            isBlock
                            isDeselectable
                            isAdaptiveWidth={true}
                            value={props.attributes.hasResponsiveFlexDirectionTab}
                            label="Flex Direction"
                            onChange={setResponsiveFlexDirectionTab}
                            className="x-control has-border justify-between"
                        >
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z" /></SVG>}
                                label="Horizontal"
                                value="row"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z" /></SVG>}
                                label="Vertical"
                                value="col"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z" /></SVG>}
                                label="Horizontal Reverse"
                                value="row-reverse"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z" /></SVG>}
                                label="Vertical Reverse"
                                value="col-reverse"
                            />
                        </ToggleGroupControl>
                    </PanelRow>
                )}
                {props.attributes.hasResponsiveDevice == "Tablet" && props.attributes.hasResponsiveFlexTab && (
                    <PanelRow className="x-control is-block space-top">
                        <ToggleGroupControl
                            __nextHasNoMarginBottom
                            isBlock
                            isDeselectable
                            isAdaptiveWidth={true}
                            value={props.attributes.hasResponsiveFlexJustifyTab}
                            label="Flex Justification"
                            onChange={setResponsiveFlexJustifyTab}
                            className="x-control has-border justify-between"
                        >
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M9 9v6h11V9H9zM4 20h1.5V4H4v16z" /></SVG>}
                                label="Start"
                                value="start"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z" /></SVG>}
                                label="Center"
                                value="center"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z" /></SVG>}
                                label="End"
                                value="end"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M9 15h6V9H9v6zm-5 5h1.5V4H4v16zM18.5 4v16H20V4h-1.5z" /></SVG>}
                                label="Justify Between"
                                value="between"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M4 4H5.5V20H4V4ZM7 10L17 10V14L7 14V10ZM20 4H18.5V20H20V4Z" /></SVG>}
                                label="Justify Around"
                                value="around"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M7 16.5h10V15H7v1.5zm0-9V9h10V7.5H7z" /></SVG>}
                                label="Justify Evently"
                                value="evenly"
                            />
                        </ToggleGroupControl>
                    </PanelRow>
                )}
                {props.attributes.hasResponsiveDevice == "Tablet" && props.attributes.hasResponsiveFlexTab && (
                    <PanelRow className="x-control is-block space-top">
                        <ToggleGroupControl
                            __nextHasNoMarginBottom
                            isBlock
                            isDeselectable
                            isAdaptiveWidth={true}
                            value={props.attributes.hasResponsiveFlexAlignTab}
                            label="Flex Align"
                            onChange={setResponsiveFlexAlignTab}
                            className="x-control has-border justify-between"
                        >
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M 15,9 H 9 v 11 h 6 z M 4,4 V 5.5 H 20 V 4 Z" /></SVG>}
                                label="Start"
                                value="start"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="m 8.75,12.75 h -5 v -1.5 h 5 v -7 h 6 v 7 h 5 v 1.5 h -5 v 7 h -6 z" /></SVG>}
                                label="Center"
                                value="center"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="m 9,15 h 6 V 4 H 9 Z m 11,5 V 18.5 H 4 V 20 Z" /></SVG>}
                                label="End"
                                value="end"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M 20,4 V 5.5 H 4 V 4 Z M 14,7 V 17 H 10 V 7 Z m 6,13 V 18.5 H 4 V 20 Z" /></SVG>}
                                label="Stretch"
                                value="stretch"
                            />
                            <ToggleGroupControlOptionIcon
                                icon={<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="m 9,9 v 6 h 6 V 9 Z m -5,1 v 1.5 H 20 V 10 Z m 16,2.5 H 4 V 14 h 16 z" /></SVG>}
                                label="Baseline"
                                value="baseline"
                            />
                        </ToggleGroupControl>
                    </PanelRow>
                )}
                {props.attributes.hasResponsiveDevice == "Tablet" && props.attributes.hasResponsiveFlexTab && (
                    <PanelRow className="x-control is-block space-top">
                        <RangeControl
                            label="Row Gap"
                            __nextHasNoMarginBottom
                            help="Please set a row gap. Only works with block.json spacing slug settings."
                            withInputField={false}
                            value={props.attributes.hasResponsiveFlexRowGapTab}
                            onChange={setResponsiveFlexRowGapTab}
                            initialPosition={0}
                            allowReset
                            type={[
                                'stepper'
                            ]}
                            marks={{}}
                            max={6}
                            min={0}
                            step={1}
                        />
                    </PanelRow>
                )}
                {props.attributes.hasResponsiveDevice == "Tablet" && props.attributes.hasResponsiveFlexTab && (
                    <PanelRow className="x-control is-block space-top">
                        <RangeControl
                            label="Column Gap"
                            __nextHasNoMarginBottom
                            help="Please set a column gap. Only works with block.json spacing slug settings."
                            withInputField={false}
                            value={props.attributes.hasResponsiveFlexColGapTab}
                            onChange={setResponsiveFlexColGapTab}
                            initialPosition={0}
                            allowReset
                            type={[
                                'stepper'
                            ]}
                            marks={{}}
                            max={6}
                            min={0}
                            step={1}
                        />
                    </PanelRow>
                )}
                {props.attributes.hasResponsiveDevice == "Tablet" && props.attributes.hasResponsiveFlexTab && (
                    <PanelRow className="x-control is-block space-top">

                        <NumberControl
                            _unstableInputWidth="20em"
                            label="Flex grow"
                            labelPosition="edge"
                            onChange={setResponsiveFlexGrowTab}
                            step="1"
                            value={props.attributes.hasResponsiveFlexGrowTab}
                            min="0"
                            max="6"
                        />

                    </PanelRow>
                )}
                {props.attributes.hasResponsiveDevice == "Tablet" && props.attributes.hasResponsiveFlexTab && (
                    <PanelRow className="x-control is-block space-top">

                        <NumberControl
                            _unstableInputWidth="20em"
                            label="Flex Shrink"
                            labelPosition="edge"
                            onChange={setResponsiveFlexShrinkTab}
                            step="1"
                            value={props.attributes.hasResponsiveFlexShrinkTab}
                            min="0"
                            max="6"
                        />

                    </PanelRow>
                )}
                {props.attributes.hasResponsiveDevice == "Tablet" && props.attributes.hasResponsiveFlexTab && (
                    <PanelRow className="x-control is-block space-top">

                        <NumberControl
                            _unstableInputWidth="20em"
                            label="Flex order"
                            labelPosition="edge"
                            onChange={setResponsiveFlexOrderTab}
                            step="1"
                            value={props.attributes.hasResponsiveFlexOrderTab}
                            min="0"
                            max="6"
                        />

                    </PanelRow>
                )}

            </PanelBody>
        </InspectorControls>
    );
};

const generateDesktopClassNames = (attributes) => {
    const base = "lg:x-";
    const flexEnabled = attributes.hasResponsiveFlex;

    return [
        flexEnabled ? `${base}flex` : "",
        flexEnabled && attributes.hasResponsiveFlexDirection ? `${base}flex-${attributes.hasResponsiveFlexDirection}` : "",
        flexEnabled && attributes.hasResponsiveFlexJustify ? `${base}justify-${attributes.hasResponsiveFlexJustify}` : "",
        flexEnabled && attributes.hasResponsiveFlexAlign ? `${base}justify-${attributes.hasResponsiveFlexAlign}` : "",
        flexEnabled && attributes.hasResponsiveFlexRowGap ? `${base}justify-${attributes.hasResponsiveFlexRowGap}` : "",
        flexEnabled && attributes.hasResponsiveFlexColGap ? `${base}justify-${attributes.hasResponsiveFlexColGap}` : "",
        flexEnabled && attributes.hasResponsiveFlexGrow ? `${base}justify-${attributes.hasResponsiveFlexGrow}` : "",
        flexEnabled && attributes.hasResponsiveFlexShrink ? `${base}justify-${attributes.hasResponsiveFlexShrink}` : "",
        flexEnabled && attributes.hasResponsiveFlexOrder ? `${base}justify-${attributes.hasResponsiveFlexOrder}` : "",
    ].filter(Boolean).join(' ');
};

const generateTabletClassNames = (attributes) => {
    const base = "md:x-";
    const flexEnabled = attributes.hasResponsiveFlexTab;

    return [
        flexEnabled ? `${base}flex` : "",
        flexEnabled && attributes.hasResponsiveFlexDirectionTab ? `${base}flex-${attributes.hasResponsiveFlexDirectionTab}` : "",
        flexEnabled && attributes.hasResponsiveFlexJustifyTab ? `${base}justify-${attributes.hasResponsiveFlexJustifyTab}` : "",
        flexEnabled && attributes.hasResponsiveFlexAlignTab ? `${base}justify-${attributes.hasResponsiveFlexAlignTab}` : "",
        flexEnabled && attributes.hasResponsiveFlexRowGapTab ? `${base}justify-${attributes.hasResponsiveFlexRowGapTab}` : "",
        flexEnabled && attributes.hasResponsiveFlexColGapTab ? `${base}justify-${attributes.hasResponsiveFlexColGapTab}` : "",
        flexEnabled && attributes.hasResponsiveFlexGrowTab ? `${base}justify-${attributes.hasResponsiveFlexGrowTab}` : "",
        flexEnabled && attributes.hasResponsiveFlexShrinkTab ? `${base}justify-${attributes.hasResponsiveFlexShrinkTab}` : "",
        flexEnabled && attributes.hasResponsiveFlexOrderTab ? `${base}justify-${attributes.hasResponsiveFlexOrderTab}` : "",
    ].filter(Boolean).join(' ');
};

const generateClassName = (attributes) => {
    return `${generateDesktopClassNames(attributes)} ${generateTabletClassNames(attributes)}`;
};


const withResponsiveClasses = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const { className, attributes, setAttributes } = props;
        
        // Generate classes based on attributes
        const generatedClasses = generateClassName(attributes);
        
        // If className is undefined or doesn't have generatedClasses, update it
        if (!className || (className && className.indexOf(generatedClasses) === -1)) {
            setAttributes({
                className: className ? `${className} ${generatedClasses}` : generatedClasses,
            });
        }

        return <BlockEdit {...props} />;
    };
}, 'withResponsiveClasses');

wp.hooks.addFilter(
    'editor.BlockEdit',
    'xbd-extention/with-responsive-classes',
    withResponsiveClasses
);

console.log('BlockEdit is being rendered');
console.log('Current device type:', props.attributes.hasResponsiveDevice);

