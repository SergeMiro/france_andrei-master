"use client";

import { useState } from "react";

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true);

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50 rounded-2xl flex items-center justify-center">
          <div className="bg-slate-700 text-slate-50 text-sm p-3 rounded-2xl shadow-lg flex justify-between">
            <div className="text-slate-500 inline-block" style={{ paddingTop: '2px' }}>
              <span className="text-white">У вас есть вопрос ?</span>
              <span className="text-purple-400"> Задайте его нам !</span>
            </div>
            <div className="text-slate-500 inline-block ml-3">
              <a href="https://t.me/FranceExperienceBot" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  alt="button Telegram"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  className="mr-2 w-6"
                  id="telegram"
                >
                  <circle cx="12" cy="12" r="12" fill="#039be5"></circle>
                  <path
                    fill="#fff"
                    d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"
                  ></path>
                </svg>
              </a>
            </div>
            <button
              className="text-slate-500 hover:text-slate-400 pl-1 ml-1 border-l border-gray-700"
              onClick={() => setBannerOpen(false)}
            >
              <span className="sr-only">Закрыть</span>
              <svg
                className="w-4 h-4 shrink-0 fill-current"
                viewBox="0 0 16 16"
              >
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
