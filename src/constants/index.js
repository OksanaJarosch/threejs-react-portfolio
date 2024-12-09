export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Anna Rachii',
        position: 'Education Manager',
        img: '',
        review:
            'Throughout our time together at GoIT School of Programming, Oksana consistently demonstrated exceptional diligence, meeting deadlines with precision. Her dedication to learning is evident in her outstanding performance during lessons, where she not only grasps complex concepts swiftly but also contributes valuable insights that enrich the entire learning environment. Oksana\'s proactive approach to problem-solving and her keen analytical skills make her a standout student. She tackles challenges with enthusiasm, displaying a genuine passion for programming. Her ability to absorb new information and apply it practically is truly commendable.\n',
            
    },
    {
        id: 2,
        name: 'Olesia Kocherha',
        position: 'Full Stack Developer',
        img: '',
        review:
            'I was lucky to work with Oksana on two projects. She demonstrated herself as a very highly qualified specialist. Oksana is a very pleasant person. In our projects, she not only effectively performed her tasks, but also successfully assisted other colleagues. This allowed us to complete the project on time. Oksana has technical knowledge and the ability to actively learn and improve her skills. Her self-confidence and problem-solving skills make her a valuable asset to any project.',
    },
];

export const myProjects = [
    {
        title: 'Rent-a-Camper - Camper Rental Service',
        desc: 'Rent-a-Camper is a platform that simplifies the process of renting campers. Users can explore a variety of camper options, add them to their favorites, and view detailed information about each camper, including amenities and user reviews.',
        subdesc:
            'This project, built with React.js, Redux, and styled-components, showcases key features such as a dynamic favorites list, a modal with detailed camper information, and a built-in booking form for seamless user experience.',
        href: 'https://oksanajarosch.github.io/rent-a-camper/',
        texture: '/textures/project/campers.mov',
        logo: '/assets/vanfavicon.svg',
        logoStyle: {
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Redux',
                path: 'assets/redux.svg',
            },
            {
                id: 3,
                name: 'styled-components',
                path: '/assets/styled.svg',
            },
        ],
    },
    {
        title: 'PowerPulse - Fitness and Nutrition Tracker',
        desc: 'PowerPulse is a responsive web application designed to help users track and improve their fitness and nutrition goals. The platform offers tools for monitoring progress, logging activities and maintaining a balanced lifestyle.',
        subdesc:
            'As a Front-End Developer, I implemented the SignUp and SignIn pages, developed modals for exercise tracking that integrate with the backend/journal, and created the logic for private and public routes. As the SCRUM Master, I led the agile project management, fostered team collaboration, and ensured efficient goal delivery. This project enhanced my React.js expertise and strengthened my teamwork skills.',
        href: 'https://idnol.github.io/ui-power-pulse/',
        texture: '/textures/project/powerpulse.mov',
        logo: '/assets/hantel.svg',
        logoStyle: {
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Redux',
                path: 'assets/redux.svg',
            },
            {
                id: 3,
                name: 'styled-components',
                path: '/assets/styled.svg',
            },
        ],
    },
    {
        title: 'Bookshelf - Online Bookstore',
        desc: 'Bookshelf is an online bookstore website where users can explore and manage books effectively.',
        subdesc:'The project involved converting a Figma layout into a fully functional website using HTML, CSS, and JavaScript. I focused on implementing the Shopping List feature and utilizing Local Storage for data persistence. This experience not only honed my technical skills but also strengthened my ability to collaborate within a team.',
        href: 'https://olesia511.github.io/project-js-team04/',
        texture: '/textures/project/bookshelf.mov',
        logo: '/assets/book.svg',
        logoStyle: {
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'JavaScript',
                path: '/assets/js.svg',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css.svg',
            },
            {
                id: 3,
                name: 'HTML',
                path: '/assets/html.svg',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];