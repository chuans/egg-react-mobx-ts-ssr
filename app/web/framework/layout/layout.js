import React, { Component } from 'react';
export default class Layout extends Component {
    render() {
        return React.createElement("html", null,
            React.createElement("head", null,
                React.createElement("title", null,
                    this.props.title,
                    " "),
                React.createElement("meta", { charSet: "utf-8" }),
                React.createElement("meta", { name: "viewport", content: "initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" }),
                React.createElement("meta", { name: "keywords", content: this.props.keywords }),
                React.createElement("meta", { name: "description", content: this.props.description }),
                React.createElement("link", { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" })),
            React.createElement("body", null,
                React.createElement("div", { id: "app" }, this.props.children)));
    }
}
//# sourceMappingURL=layout.js.map