# Contributing

This document explains how to make changes to the documentation.

If you need help, feel free to contact Arian Baishya.

## Structure

The site is currently structured something like this:

- Homepage
- Documentation ("docs" folder)
    - Start Here
    - Project1 (folder)
        - Page1
        - Page2
        - Page3
    - Project2 (folder)
        - Page1
        - Page2
        - Page3
    - Project3 (folder)
        - Page1
        - Page2
        - Page3

The following sections will explain how to:

- [Edit a page of an existing project](#edit-a-page-of-an-existing-project)
- [Add a page to an existing project](#add-a-page-to-an-existing-project)
- [Edit the label of an existing project](#edit-the-label-of-an-existing-project)
- [Add a new project](#add-a-new-project)
- [Make a more significant change that isn't covered in this document](#make-a-more-significant-change-that-isnt-covered-in-this-document)

## Edit a page of an existing project

[//]: # (TODO: finish this)
You should be able to just click the "edit this page" link on the site itself, and it'll navigate you
to the right page to edit it. The filetype of the documentation files is called "Markdown", you may want to look up
some details on how to make pretty text in Markdown if you're not already familiar. That way, you can have headers,
links, and other cool formatting (like this page has).

## Add a page to an existing project

Create a file inside the folder of the project you want to edit. Make sure the filename begins with a number that
represents its order in the sidebar. This will ensure it is shown in the correct order.

## Edit the label of an existing project

This is slightly more involved, but effort has been put in to make this simple. Open [this file](./constants.ts) and
edit the string between quotation marks relating to the project you want to edit. As an example. Imagine you have
the following list of projects within the file:

```typescript
const LIST_OF_PROJECT_DOCS: ProjectDocs[] = [
    {label: "Start Here", dirName: "start-here", sidebarID: "startHereSidebar"},
    {label: "EnMo", dirName: "enmo", sidebarID: "enmoSidebar"},
    {label: "STORM", dirName: "storm", sidebarID: "stormSidebar"},
] as const;
```

If you wanted to change the label of the project "STORM" to say "STORM Competition" instead, it would be changed to
this:

```typescript
const LIST_OF_PROJECT_DOCS: ProjectDocs[] = [
    {label: "Start Here", dirName: "start-here", sidebarID: "startHereSidebar"},
    {label: "EnMo", dirName: "enmo", sidebarID: "enmoSidebar"},
    {label: "STORM Competition", dirName: "storm", sidebarID: "stormSidebar"}, // <--- This line was changed
] as const;
```

## Add a new project

If you wanted to add a new project, simply copy an existing project within the project list, and edit it to your liking.
For example, let's add a new project called "Cool Project". Assume the project list initially looked as previously shown
at the beginning of the previous section. After editing, it could look as follows:

```typescript
const LIST_OF_PROJECT_DOCS: ProjectDocs[] = [
    {label: "Start Here", dirName: "start-here", sidebarID: "startHereSidebar"},
    {label: "EnMo", dirName: "enmo", sidebarID: "enmoSidebar"},
    {label: "STORM", dirName: "storm", sidebarID: "stormSidebar"},
    {label: "Cool Project", dirName: "cool-project", sidebarID: "coolProjectSidebar"}, // <--- This line was added
] as const;
```

As you may notice, we added a 4th item to the list, leaving all other items untouched. Here is an explanation of the
fields and their values:

`label: "Cool Project"` -> We want the project to show up on the site labeled as "Cool Project"

`dirName: "cool-project"` -> As mentioned in the [Structure](#structure) section, every project has its own folder
inside the "docs" folder. This field states that the documentation for our new project should be in a folder
called "cool-project" inside the "docs" folder. You will probably want to create that directory, assuming it doesn't
already exist.

`sidebarID: "coolProjectSidebar"` -> The value of this doesn't really matter. It just needs to be different from any
other project's "sidebarID" value. I just made it "coolProjectSidebar" because it follows the naming scheme of the other
ones.

## Make a more significant change that isn't covered in this document

[//]: # (TODO: finish this)
Honestly Your best bet will be to ask the designated person/people for help (listed at the top of this document) or look
up "Docusaurus" and figure it out. Depending on what you want to do, you may need to learn Typescript and maybe even
React.