// import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Kat',
    lastName:  '',
    get name() {
        return `${this.firstName}`; //  ${this.lastName}
    },
    role:      'Developer',
    avatar:    '/images/avatar.jpg',
    location:  'America/Los_Angeles',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: [] // 'English' // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/northernpaws',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/kat-m-5979a714b/',
    },
    // {
    //     name: 'X',
    //     icon: 'x',
    //     link: '',
    // },
    // {
    //     name: 'Email',
    //     icon: 'email',
    //     link: 'mailto:example@gmail.com',
    // },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Developer</>,
    subline: <>I'm Kat, a developer passionate about open-source, Linux, Game Development, and problem solving.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: false
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Kat is a Canadian-based developer, passionate about open-source, Linux, Game Development, and problem solving.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Locate Press - Part Time',
                timeframe: '2022 - Present',
                role: 'Technical Editor & Systems Administrator',
                achievements: [
                    <>Edited, proofread, and performed technical edits and inline code validation for technical books/manuals.</>,
                    <>Managed Git-based CI/CD deployments and infrastructure for the company website and digital storefront.</>,
                    <>Installed Proxmox on a dedicated sever and migrated legacy infrastructure to a streamlined setup utilizing LXC containers.</>
                ],
                images: [ ]
            },
            {
                company: 'Iceline Hosting - Contract',
                timeframe: '2020 - 2022',
                role: 'Multiple Roles',
                achievements: [
                    <>Aided the customer support department in resolving Linux systems-administration related customer tickets.</>,
                    <>Managed a specialized fork of an open-source management panel, contributing back to the original open-source project as we made improvements.</>,
                    <>Performed Linux systems administration for the bare-metal dedicated servers running the customer's services.</>,
                    <>Created a modern static website, drastically increasing SEO rankings and scores, causing a large growth in customers.</>,
                    <>Administrated the hardware for a 1000+ participant virtual concert, sponsored in collaboration with, NTeam Roleplay, Redbull, and the Bosnia musicians Bruda and Helem Nejse.</>
                ],
                images: [
                    {
                        src: '/images/projects/iceline/website.jpg',
                        alt: 'Picture of the Iceline Hosting homepage I developed',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Creavite - Co-Founder',
                timeframe: '2020 - 2021',
                role: 'Software Developer',
                achievements: [
                    <>Built a Linux-based automated rendering system using open-source projects, Golang, Adobe After Effects, and event queues.</>,
                    <>The system served 15,000 customers in the first year, delivering over 2,000,000 personalized renders and graphics.</>
                ],
                images: [
                    {
                        src: '/images/projects/creavite/cover.jpg',
                        alt: 'A white banner with the words "Creavite", and "Free top of the line animated graphics"',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'TabTime - Freelance',
                timeframe: '2020 - 2021',
                role: 'Software Developer',
                achievements: [
                    <>Developed an event-driven cellular notification server for patient and carer managed medication reminders.</>,
                    <>Created a system to allow carers to record and assign personalized voice messages for their patient's reminders.</>,
                    <>Worked directly with feedback from batches of perspective customers to design the system around their specific needs.</>
                ],
                images: [ ]
            },
            {
                company: 'Teconica - Full Time',
                timeframe: '2018 - 2020',
                role: 'Sysadmin & Software Developer',
                achievements: [
                    <>Managed Kubernetes-based serverless infrastructure for deploying websites and microservices for clients.</>,
                    <>Installed and managed cloud hosting infrastructure, including Openstack, Virtualizor, and Ceph.</>,
                    <>Collaborated with datacenter technicians at Equinix Datacenters to build, install, and initialize owned hardware.</>,
                    <>Performed development and Linux administration work for sister companies as required.</>
                ],
                images: [ ]
            },
            {
                company: 'Legendary Hosts - Full Time',
                timeframe: '2017 - 2018',
                role: 'Fullstack Web Developer',
                achievements: [
                    <>Developed a customer-facing website and panel for managing Linux servers.</>,
                    <>Connected the customer panel to on-prem cloud services, including Openstack, Virtualizor, and Ceph.</>
                ],
                images: [
                    {
                        src: '/images/projects/legendary-hosts/homepage.jpg',
                        alt: 'A picture of a website homepage, white background with red accents.',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'LandStream - Contract',
                timeframe: '2015-2016',
                role: 'Fullstack Web Developer',
                achievements: [
                    <>Created an interactive 3D-map allowing customers to explore core soil samples and IoT mesh sensors on their farms.</>,
                    <>Featured in a presentation given to Harvards's School of Forestry in 2019, demonstrating sample-collection techniques and how my map visualized them.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Treehouse - Full Stack JavaScript Techdegree (2018)',
                description: <>Online diploma program equivalent to a college-level program consisting of 12 units. Had to leave due to burnout, but completed 11 of the 12 units with grades of "Meets Expectations" or "Exceeds Expectations".</>,
            },
            {
                name: 'High School Diploma (2018)',
                description: <>Cumulative GPA 3.66</>,
            },
            {
                name: 'Treehouse - Web Design Track (2017)',
                description: <>40-hour program covering the fundamentals of web design including branding principles such as branding, color theory, and typography.</>,
            },
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Linux Systems Administration',
                description: <>Administrating Linux systems, particularly with Debian, Ubuntu, and CentOS.</>,
                images: [ ]
            },
            {
                title: 'Programming Languages',
                description: <>C, C++, Golang, JavaScript, TypeScript, and PHP.</>,
                images: [ ]
            },
            {
                title: 'Game Programming',
                description: <>Unity, Unreal Engine 5, Godot, custom C++ engines</>,
                images: [ ]
            },
            {
                title: 'Git',
                description: <>Repository management, Pull Requests, CI/CD processes, and code review.</>,
                images: [ ]
            },
            {
                title: 'Web Development',
                description: <>Building web apps with Typescript, Node.js, Next.js, and React.</>,
                images: [ ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };