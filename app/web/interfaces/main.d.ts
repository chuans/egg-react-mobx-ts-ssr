interface LayoutProps {
    title?: string;
    keywords?: string;
    description?: string;
    children?: any;
}

interface RoutersProps {
    states: Object;
    path?: String;
    exact?: Boolean;
    Component?: any;
}