(function (blocks, element, editor, components, data, i18n, blockEditor) {
    const el = element.createElement;
    const { RichText, PlainText } = editor;
    const { PanelBody, ToggleControl } = components;
    const __ = i18n.__;

    blocks.registerBlockType('harrison-acf-blocks/team-member-position', {
        title: __('Team Member Position', 'harrison-acf-blocks'),
        description: __('A custom block to display the "team_member_position" field.', 'harrison-acf-blocks'),
        icon: 'admin-users',
        category: 'common',
        supports: {
            align: true,
            color: { background: true, text: true, gradients: true, link: true },
            customClassName: true,
            className: true,
            fontSize: true,
            spacing: true,
        },
        attributes: {
            position: {
                type: 'string',
                source: 'html',
                selector: 'p',
            },
        },

        edit: function (props) {
            const { attributes, setAttributes, isSelected } = props;
            const { position } = attributes;

            return (
                el('div', { className: props.className },
                    el(RichText, {
                        tagName: 'p',
                        value: position,
                        onChange: (value) => setAttributes({ position: value }),
                        placeholder: __('Enter team member position...', 'harrison-acf-blocks'),
                        style: { fontWeight: 'normal' },
                        formattingControls: ['bold', 'italic', 'link', 'strikethrough'],
                        isSelected: isSelected,
                    })
                )
            );
        },

        save: function (props) {
            const { attributes } = props;
            const { position } = attributes;

            return el(RichText.Content, {
                tagName: 'p',
                value: position,
            });
        },
    });
})(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor || window.wp.editor,
    window.wp.components,
    window.wp.data,
    window.wp.i18n,
    window.wp.blockEditor || window.wp.editor
);
