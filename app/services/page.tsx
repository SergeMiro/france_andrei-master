import { Metadata } from 'next';
import React from 'react';
import Services from '../../components/allServices';

export const metadata: Metadata  = {
	title: 'Стажировка, учёба, работа во Франции. Все услуги France Experience.',
	description: 'Ищете стажировку или сезонную работу во Франции? Хотите поступить во французский ВУЗ или найти работу во Франции? France Experience к вашим услугам.',
}


const BlockServices = () => {
  return (
    <Services />
  );
};

export default BlockServices;

