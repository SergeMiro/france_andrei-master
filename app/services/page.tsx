"use client"

// import { Metadata } from 'next';

// export const metadata: Metadata  = {
// 	title: 'Стажировка, учёба, работа во Франции - France Experience',
// 	description: 'Откройте для себя стажировку и сезонную работу во Франции, а также волонтерские программы и возможности трудоустройства во всей Европе с France Experience.',
// }


import React, { useRef, Ref } from 'react';
import Service from '@/components/service';
import StageIcon from '@/public/fonts/stage_icon.png';
import MovingIcon from '@/public/fonts/moving_icon.png';
import EducIcon from '@/public/fonts/educ_icon.png';
import WorkIcon from '@/public/fonts/work_icon.png';
import AdminQuest from '@/public/fonts/admin_voprosy_icon.png';

const Services = () => {
	const stageRef = useRef(null);
	const moveRef = useRef(null);
	const educRef = useRef(null);
	const workRef = useRef(null);
	const admRef = useRef(null);

	return (
		<>
			<section className='relative xs:mt-14 md:mt-30 xs:pt-0 md:pt-10'>
				<Service
					ref={stageRef}
					iconSrc={StageIcon}
					title="Оплачиваемая стажировка во Франции"
					description="Это прекрасная возможность провести во Франции от 2 до 6 месяцев, приобрести интернациональный опыт, усовершенствовать свои языковые навыки и познакомиться с этой замечательной страной. Стажировки проходят в лучших отелях, ресторанах и кемпингах в разных регионах Франции. Стажер получает вознаграждение в размере не меньше, чем 668 € в месяц."
					blockStyle="bg-white"
					isListVisible="hidden"
				/>

				<Service
					ref={moveRef}
					iconSrc={MovingIcon}
					title="Переезд во Францию"
					description="Консультируем по возможностям переезда во Францию в зависимости от вашей ситуации: высококвалифицированным специалистам доступны разнообразные программы, студенты могут воспользоваться обширным выбором образовательных возможностей, а предприниматели получают поддержку и стимул для развития своего бизнеса."
					sectionStyle="bg-gray-100"
					isListVisible="hidden"
				/>

				<Service
					ref={educRef}
					iconSrc={EducIcon}
					title="Обучение во Франции"
					description="Мы предлагаем услуги по записи на языковые и профессиональные курсы, помогаем в зачислении в высшие учебные заведения страны, а также помогаем подобрать школу для ребенка. С нами вы можете быстрее и эффективнее пройти все этапы записи в учебные заведения Франции, а также подобрать лучшее заведение под ваш запрос."
					blockStyle="bg-white"
					isListVisible="hidden"
				/>

				<Service
					ref={workRef}
					iconSrc={WorkIcon}
					title="Работа во Франции"
					description="Мы занимаемся помощью в оформлении рабочей визы, а также подбором работодателя для тех, кто только хочет приехать или уже находится во Франции. Независимо от того, являетесь ли вы высококвалифицированным специалистом, студентом или предпринимателем, мы предоставим вам все необходимые ресурсы и знания для успешного старта во французском обществе."
					blockStyle="bg-gray-100"
					isListVisible="hidden"
				/>

				<Service
					ref={admRef}
					iconSrc={AdminQuest}
					title="Административные вопросы"
					description="Мы предоставляем помощь в :"
					blockStyle="bg-white relative"
					isListVisible="block"
					listItem1="оформлении документов для любых типов виз"
					listItem2="запись в учебные заведения"
				/>
			</section>
		</>
	);
}

export default Services;


