type ProjectDocs = {
    label: string,
    dirName: string,
    sidebarID: string
};

const LIST_OF_PROJECT_DOCS: ProjectDocs[] = [
    {label: "Start Here", dirName: "start-here", sidebarID: "startHereSidebar"},
    {label: "EnMo", dirName: "enmo", sidebarID: "enmoSidebar"},
    {label: "STORM 2025 (Archive)", dirName: "storm-2025", sidebarID: "storm2025Sidebar"},
    {label: "STORM 2026", dirName: "storm-2026", sidebarID: "storm2026Sidebar"},
] as const;

export default LIST_OF_PROJECT_DOCS
