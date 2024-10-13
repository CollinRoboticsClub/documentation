type ProjectDocs = {
    label: string,
    dirName: string,
    sidebarID: string
};

const LIST_OF_PROJECT_DOCS: ProjectDocs[] = [
    {label: "Team Info", dirName: "onboarding", sidebarID: "onboardingSidebar"},
    {label: "EnMo", dirName: "enmo", sidebarID: "enmoSidebar"},
    {label: "STORM", dirName: "storm", sidebarID: "stormSidebar"},
] as const;

export default LIST_OF_PROJECT_DOCS