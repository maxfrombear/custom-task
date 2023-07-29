(function (blocks, editor, components, data, compose) {
    var el = wp.element.createElement;
    var __ = wp.i18n.__;
    

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
        edit: function (props) {
            var position = props.attributes.position;

            function onChangePosition(newPosition) {
                // Update the 'position' attribute when content changes
                props.setAttributes({ position: newPosition });
            }

            return el(blockEditor.RichText, {
                tagName: 'p',
                value: position,
                onChange: onChangePosition,
                placeholder: __('Enter team member position...', 'harrison-acf-blocks'),
                style: { fontWeight: 'normal' },
                formattingControls: ['bold', 'italic', 'link', 'strikethrough'],
            });
        },
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
