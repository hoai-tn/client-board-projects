import { ComponentStory, ComponentMeta } from "@storybook/react";
import ClientProjectsBoard from "./client-projects-board";

const clientActiveProjects = [
  {
    id: "1",
    name: "Project 1",
    currentPhase: "Zoning",
    startDate: "10/1/2022",
    endDate: "12/31/2022",
    manager: "Max",
    totalBudget: 2000,
    billed: 10,
    type: "Residential",
    priority: "top",
  },
  {
    id: "2",
    name: "Project 2",
    currentPhase: "Permitting",
    startDate: "1/10/2022",
    endDate: "1/1/2021",
    manager: "Wick",
    totalBudget: 1000,
    billed: 40,
    type: "Residential",
    priority: "left",
  },
  {
    id: "3",
    name: "Project 3",
    currentPhase: "Pre-Design",
    startDate: "1/10/2022",
    endDate: "1/1/2021",
    manager: "Rick",
    totalBudget: 3000,
    billed: 40,
    type: "Residential",
    priority: "bottom",
  },
];

const clientPausedProjects = [
  {
    id: "1",
    name: "Project 1",
    currentPhase: "Zoning",
    startDate: "10/1/2022",
    pauseDate: "12/31/2022",
    pauseReason: "Residential",
    manager: "Max",
    totalBudget: 2000,
    billed: 10,
    type: "top",
  },
  {
    id: "2",
    name: "Project 2",
    currentPhase: "Permitting",
    startDate: "10/1/2022",
    pauseDate: "12/31/2022",
    pauseReason: "Done",
    manager: "Wick",
    totalBudget: 1000,
    billed: 40,
    type: "school",
  },
  {
    id: "3",
    name: "Project 3",
    currentPhase: "Pre-Design",
    startDate: "1/10/2022",
    pauseDate: "1/1/2021",
    pauseReason: "Residential",
    manager: "Rick",
    totalBudget: 300.3,
    billed: 40,
    type: "Multi-Family",
  },
];

const clientOpenProjects = [
  {
    id: "1",
    name: "Project 1",
    startDate: "10/1/2022",
    endDate: "12/31/2022",
    manager: "Max",
    totalBudget: 2000,
    overheadBilled: 10,
    type: "Residential",
  },
  {
    id: "2",
    name: "Project 2",
    startDate: "10/1/2022",
    endDate: "12/31/2022",
    manager: "Wick",
    totalBudget: 1000,
    overheadBilled: 40,
    type: "School",
  },
  {
    id: "3",
    name: "Project 3",
    startDate: "1/10/2022",
    endDate: "1/1/2021",
    manager: "Rick",
    totalBudget: 3000,
    overheadBilled: 40,
    type: "Public Works",
  },
];

const clientCompletedProjects = [
  {
    id: "1",
    name: "Project 1",
    profitMargin: 10,
    startDate: "10/1/2022",
    endDate: "12/31/2022",
    manager: "Max",
    totalBudget: 2000,
    billed: 10,
    type: "Residential",
  },
  {
    id: "2",
    name: "Project 2",
    profitMargin: 50,
    startDate: "10/1/2022",
    endDate: "12/31/2022",
    manager: "Wick",
    totalBudget: 1000,
    billed: 40,
    type: "Multi-Family",
  },
  {
    id: "3",
    name: "Project 3",
    profitMargin: 30,
    startDate: "1/10/2022",
    endDate: "1/1/2021",
    manager: "Rick",
    totalBudget: 3000,
    billed: 40,
    type: "School",
  },
];

const clientLostProjects = [
  {
    id: "1",
    name: "Project 1",
    lossReason: "price",
    startDate: "10/1/2022",
    endDate: "12/31/2022",
    manager: "Max",
    totalBudget: 2000,
    overheadBilled: 10,
    type: "Residential",
  },
  {
    id: "2",
    name: "Project 2",
    lossReason: "price",
    startDate: "1/10/2022",
    endDate: "1/1/2021",
    manager: "Wick",
    totalBudget: 1000,
    overheadBilled: 40,
    type: "Multi-Family",
  },
  {
    id: "3",
    name: "Project 3",
    lossReason: "price",
    startDate: "1/10/2022",
    endDate: "1/1/2021",
    manager: "Rick",
    totalBudget: 3000,
    overheadBilled: 40,
    type: "School",
  },
];

export default {
  component: ClientProjectsBoard,
} as ComponentMeta<typeof ClientProjectsBoard>;

const Template: ComponentStory<typeof ClientProjectsBoard> = (args) => {
  return <ClientProjectsBoard {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  clientActiveProjects,
  clientPausedProjects,
  clientOpenProjects,
  clientCompletedProjects,
  clientLostProjects,
};
