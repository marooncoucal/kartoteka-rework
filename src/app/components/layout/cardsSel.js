import { CardList } from "./cardList";

const data = [
    {
        id: 1,
        link: 'https://www.awwwards.com/',
        image: '/cards/awards.png',
        title: 'Awwwards',
        text: 'Сайт, публикующий интересные сайты, направлен на продвижение лучших инновационных разработок в вебе',
        tags: ['веб-дизайн', 'сайт']
    },
    {
        id: 2,
        link: 'https://cantunsee.space/',
        image: '/cards/unsee.png',
        title: `Can't Unsee`,
        text: 'Игра для дизайнеров для проверки знаний в дизайне интерфейсов',
        tags: ['веб-дизайн', 'игра']
    },
    {
        id: 3,
        link: 'https://hydra.ojack.xyz/',
        image: '/cards/hydra.png',
        title: 'Hydra: Live Coding Visuals',
        text: 'Среда кодирования с возможностью изменения кода в реальном времени, которая запускается непосредственно в браузере.',
        tags: ['код', 'анимация', 'синтезатор', 'видео']
    },
    {
        id: 4,
        link: 'https://www.wiley.com/en-gb/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766583',
        image: '/cards/aboutface.png',
        title: 'Об интерфейсах: основы интерактивного дизайна',
        text: 'Книга про интерактивный дизайн, продолжает лидировать в идеях и методах для практиков дизайна и разработчиков.',
        tags: ['обучение', 'текст', 'книга', 'веб-дизайн']
    },
    {
        id: 5,
        link: 'https://deadsign.ru/workflow/webs_lost_soul/',
        image: '/cards/space.png',
        title: 'Куда пропала душа веба?',
        text: 'Статья про тренды в вебе и поиск причин одинаковости сайтов',
        tags: ['обучение', 'текст', 'статья', 'веб-дизайн']
    },
]

export default function Cards() {
    return (
        <CardList cards={data}></CardList>
    )
}