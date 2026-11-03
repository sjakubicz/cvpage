import { csCoursework, mathCoursework, mlCoursework } from './coursework'
import { csStudyAreas, cyberStudyAreas, mathStudyAreas, mlStudyAreas } from './studyAreas'
import { csProjects, mathProjects, mlProjects } from './studyProjects'
import type { Education, Experience, Profile, Project, Publication } from './types'

export const profile: Profile = {
    name: 'Szymon Jakubicz',
    headline: 'content.profile.headline',
    about: 'content.profile.about',
    contact: {
        encodedEmail: 'bW9jLmxpYW1nQHpjaWJ1a2Fqcw==',
        encodedPhone: 'NDI3IDExMSA0NjYgODQr',
    },
    links: [
        {
            label: 'GitHub',
            url: 'https://github.com/sjakubicz',
            icon: 'github',
        },
        {
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/szymon-jakubicz',
            icon: 'linkedin',
        },
    ],
    skills: [
        {
            icon: 'ml',
            category: 'content.skills.ml.category',
            items: 'content.skills.ml.items',
        },
        {
            icon: 'llm',
            category: 'content.skills.llm.category',
            items: 'content.skills.llm.items',
        },
        {
            icon: 'graphs',
            category: 'content.skills.graphs.category',
            items: 'content.skills.graphs.items',
        },
        {
            icon: 'edge',
            category: 'content.skills.edge.category',
            items: 'content.skills.edge.items',
        },
        {
            icon: 'software',
            category: 'content.skills.software.category',
            items: 'content.skills.software.items',
        },
        {
            icon: 'math',
            category: 'content.skills.math.category',
            items: 'content.skills.math.items',
        },
    ],
    languages: [
        {
            flag: 'pl',
            name: 'content.languages.pl.name',
            level: 'content.languages.pl.level',
        },
        {
            flag: 'en',
            name: 'content.languages.en.name',
            level: 'content.languages.en.level',
        },
    ],
}

export const experience: Experience[] = [
    {
        role: 'content.experience.mms.role',
        company: 'Million Monkeys Software',
        companyUrl: 'https://www.linkedin.com/company/million-monkeys-software/posts/?feedView=all',
        logo: '/mmslogo.jpg',
        location: 'content.experience.mms.location',
        start: '2022-07',
        projects: [
            {
                name: 'content.projects.documentsToKnowledgeGraphs.name',
                description: 'content.projects.documentsToKnowledgeGraphs.description',
                tags: ['LLM', 'Llama', 'Qwen', 'Knowledge Graphs', 'Python'],
            },
            {
                name: 'content.projects.jetsonTracking.name',
                description: 'content.projects.jetsonTracking.description',
                tags: ['FairMOT', 'PyTorch', 'Computer Vision', 'NVIDIA Jetson', 'CUDA'],
            },
            {
                name: 'content.projects.aiTextEditor.name',
                description: 'content.projects.aiTextEditor.description',
                tags: ['React', 'JavaScript', 'LLM', 'AI Agents'],
            },
            {
                name: 'content.projects.knowledgeGraphPlatform.name',
                description: 'content.projects.knowledgeGraphPlatform.description',
                tags: ['React', 'FastAPI', 'REST API', 'Knowledge Graphs'],
            },
        ],
        highlights: [
            {
                icon: 'clients',
                title: 'content.experience.mms.highlights.clients.title',
                description: 'content.experience.mms.highlights.clients.description',
            },
            {
                icon: 'research',
                title: 'content.experience.mms.highlights.research.title',
                description: 'content.experience.mms.highlights.research.description',
            },
            {
                icon: 'quality',
                title: 'content.experience.mms.highlights.quality.title',
                description: 'content.experience.mms.highlights.quality.description',
            },
            {
                icon: 'review',
                title: 'content.experience.mms.highlights.review.title',
                description: 'content.experience.mms.highlights.review.description',
            },
            {
                icon: 'growth',
                title: 'content.experience.mms.highlights.growth.title',
                description: 'content.experience.mms.highlights.growth.description',
            },
        ],
    },
]

export const education: Education[] = [
    {
        degree: 'content.education.cyber.degree',
        school: 'content.education.cyber.school',
        url: 'content.education.cyber.url',
        start: '2026-10',
        areas: cyberStudyAreas,
    },
    {
        degree: 'content.education.ml.degree',
        school: 'content.education.ml.school',
        url: 'content.education.ml.url',
        start: '2023-10',
        end: '2025-09',
        eqfLevel: 7,
        areas: mlStudyAreas,
        projects: mlProjects,
        coursework: mlCoursework,
        thesis: 'content.education.ml.thesis',
    },
    {
        degree: 'content.education.cs.degree',
        school: 'content.education.cs.school',
        url: 'content.education.cs.url',
        start: '2020-10',
        end: '2023-07',
        eqfLevel: 6,
        areas: csStudyAreas,
        projects: csProjects,
        coursework: csCoursework,
        thesis: 'content.education.cs.thesis',
    },
    {
        degree: 'content.education.math.degree',
        school: 'content.education.math.school',
        url: 'content.education.math.url',
        start: '2020-10',
        end: '2024-07',
        eqfLevel: 6,
        areas: mathStudyAreas,
        projects: mathProjects,
        coursework: mathCoursework,
        thesis: 'content.education.math.thesis',
    },
]

export const publications: Publication[] = [
    {
        title: 'POMO+: Leveraging Starting Nodes in POMO for Solving Capacitated Vehicle Routing Problem',
        authors: 'S. Jakubicz, J. Wawszczak, K. Kuźniak, P. Gora',
        venue: 'arXiv',
        year: 2025,
        url: 'https://arxiv.org/abs/2508.08493',
        pdfUrl: 'https://arxiv.org/pdf/2508.08493',
        description: 'content.publications.pomoPlus.description',
    },
]

export const otherProjects: Project[] = [
    {
        name: 'content.projects.docagent.name',
        description: 'content.projects.docagent.description',
        tags: ['FastAPI', 'PostgreSQL', 'pgvector', 'LangGraph', 'RAG', 'React', 'Docker'],
        repo: 'https://github.com/sjakubicz/docagent',
    },
]
