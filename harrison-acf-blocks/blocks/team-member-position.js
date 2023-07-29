(function (blocks, editor, components, data, compose) {
    var el = wp.element.createElement;
    var __ = wp.i18n.__;
    var withSelect = wp.data.withSelect;
    var dispatch = wp.data.dispatch;
    

    blocks.registerBlockType('harrison-acf-blocks/team-member-position', {
        title: __('Team Member Position', 'harrison-acf-blocks'),
        description: __('A custom block to display the "team_member_position" field.', 'harrison-acf-blocks'),
        icon: 'admin-users',
        category: 'common',
        keywords: ['team', 'position', 'acf'],
        supports: {
            align: ['left', 'center', 'right'],
            mode: false,
            ariaLabel: true,
            color: {background: true,text: true,gradients: true,link: true,},
            typography: {fontSize: true,},
            anchor: true
        },
        edit: compose.compose(
            withSelect(function (select, props) {
                var postId = select('core/editor').getCurrentPostId();
                return {
                    position: select('core/editor').getEditedPostAttribute('meta')['team_member_position'] || '',
                    postId: postId,
                };
            }),
            function (props) {
                var position = props.position;
        
                function onChangePosition(newPosition) {
                    dispatch('core/editor').editPost({ meta: { team_member_position: newPosition } });
                }
        
                return el(components.Fragment, {}, [
                    el(components.InspectorControls, {}, [
                        el(components.PanelBody, {
                            title: __('Block Settings', 'harrison-acf-blocks'),
                            initialOpen: true,
                        }, [
                            el(components.PanelRow, {}, [
                                el(components.ToggleControl, {
                                    label: __('Align Left', 'harrison-acf-blocks'),
                                    checked: props.attributes.align === 'left',
                                    onChange: function (align) {
                                        props.setAttributes({ align: align ? 'left' : undefined });
                                    },
                                }),
                                el(components.ToggleControl, {
                                    label: __('Align Center', 'harrison-acf-blocks'),
                                    checked: props.attributes.align === 'center',
                                    onChange: function (align) {
                                        props.setAttributes({ align: align ? 'center' : undefined });
                                    },
                                }),
                                el(components.ToggleControl, {
                                    label: __('Align Right', 'harrison-acf-blocks'),
                                    checked: props.attributes.align === 'right',
                                    onChange: function (align) {
                                        props.setAttributes({ align: align ? 'right' : undefined });
                                    },
                                }),
                            ]),
                        ]),
                    ]),
                    el(components.RichText, {
                        tagName: 'p',
                        value: position,
                        onChange: onChangePosition,
                        placeholder: __('Enter team member position...', 'harrison-acf-blocks'),
                        style: { fontWeight: 'normal' },
                        formattingControls: ['bold', 'italic', 'link', 'strikethrough'],
                        isSelected: false,
                        // Add 'className' to apply alignment dynamically
                        className: props.attributes.align ? 'align-' + props.attributes.align : null,
                    }),
                ]);
            }
        ),
        save: function (props) {
            return el(components.RichText.Content, {
                tagName: 'p',
                value: props.attributes.position,
            });
        },
    });
})(
    window.wp.blocks,
    window.wp.editor,
    window.wp.components,
    window.wp.data,
    window.wp.compose
);