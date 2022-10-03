$(document).ready(() => {
    render_projects('all');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/dust-detection.jpg',
            link: 'https://github.com/ChaejinE/ChaejinE/wiki/Project-1.-Defect-Detection-using-Segmentation',
            title: 'Defect Detection using Segmentation',
            demo: false,
            technologies: ['TensorFlow2', 'Keras'],
            description: "먼지 검출용 Deep Learning Model 개발",
            categories: ['MachineVision']
        },
        {
            image: 'assets/images/defect-detection-cv.jpg',
            link: 'https://github.com/ChaejinE/ChaejinE/wiki/Project-2.-Defect-Detection-using-Computer-Vision',
            title: 'Defect Detection using Computer Vision',
            demo: false,
            technologies: ['Python', 'OpenCV'],
            description: "성형 불량 및 너트 삽입 불량 검출 S/W 개발",
            categories: ['MachineVision']
        },
        {
            image: 'assets/images/AMR.jpg',
            link: 'https://github.com/ChaejinE/ChaejinE/wiki/Project-3.-%5BEducation%5D-AMR-Autonomous-Driving-with-Isaac-Sim',
            title: 'AMR Autonomous Driving Scenario',
            demo: "https://www.youtube.com/watch?v=RTxQUHCtFu8&t=5s",
            technologies: ['Python', 'ROS1', 'Issac-sim'],
            description: "AMR의 자율 주행 및 대기, 화물 인지, 적재 시나리오 수행",
            categories: ['AutonomousDriving']
        },
        {
            image: 'assets/images/3d_transformation.jpg',
            link: 'https://github.com/ChaejinE/ChaejinE/wiki/Project-4.-3D-Position-Estimation-using-Single-Cam',
            title: '3D Position Estimation using Single Cam',
            demo: 'https://www.nagekar.com/mpw',
            technologies: ['Cpp', 'ROS2'],
            description: "2D Position(u, v)에서 3D Position(x,y,z) for base link 추정",
            categories: ['AutonomousDriving']
        },
        {
            image: 'assets/images/azure-mlflow.jpg',
            link: 'https://github.com/ChaejinE/ChaejinE/wiki/Project-5.-Deep-Learning-Basic-Training-Pipeline-%EA%B5%AC%EC%B6%95-with-Mlflow-&-Azure-MLStudio',
            title: 'Deep Learning Basic Training Pipeline 구축 with Mlflow & Azure MLStudio',
            demo: false,
            technologies: ['mlflow', 'Azure', 'docker'],
            description: "Mlflow & Azure - Training tracking, Model Versioning 및 Sharing",
            categories: ['MLOps']
        },
        {
            image: 'assets/images/autolabeling.png',
            link: 'https://github.com/ChaejinE/ChaejinE/wiki/Project-6.-AutoLabeling-System-%EA%B5%AC%EC%B6%95-with-CVAT---nuclio',
            title: 'AutoLabeling System 구축 with CVAT + nuclio',
            demo: false,
            technologies: ['docker', 'nuclio'],
            description: "CVAT Custom Model AutoLabeling System 구축",
            categories: ['MLOps']
        },
        {
            image: 'assets/images/data-extractor.jpg',
            link: 'https://github.com/ChaejinE/ChaejinE/wiki/Project-7.-Web-Server-Develop-for-data-extraction',
            title: 'Web Server Develop for data extraction',
            demo: false,
            technologies: ['django', 'vue.js', 'docker'],
            description: "Back Office Web Server 개발 - Image Data 추출",
            categories: ['MLOps', 'DataOps']
        },
        {
            image: 'assets/images/data_upload.jpg',
            link: 'https://github.com/ChaejinE/ChaejinE/wiki/Project-8.-Web-Server-Develop-for-data-upload',
            title: 'Web Server Develop for data upload',
            demo: false,
            technologies: ['django', 'vue.js', 'docker'],
            description: "Back Office Web Server 개발 - Data Upload 자동화",
            categories: ['MLOps', 'DataOps']
        },
    ]

    let projects = [];
    if (slug == 'all') {
        projects = projects_obj.map(project_mapper);
    }
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ?
            `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`
            : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                `<span class="project-technology paragraph-text-normal">${tech}</span>`
            ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}