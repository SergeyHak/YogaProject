![Typing SVG](https://readme-typing-svg.herokuapp.com?font=&weight=1000&size=40&pause=1000&color=F7245F&background=6D28FF00&width=1000&lines=Курсовая+работа+YogaProject!).
 ### _Разработка приложения для занятия любимым видом спорта._
 Финальный результат этого задания - реализация приложения, с тренировками на день  заполнением прогресса и видеоматериалами. 
 Описание проекта c пояснениями доступно [здесь](https://www.figma.com/file/QoOmLM2WGbES23xQeDCCYi/%D0%A1%D0%B0%D0%B9%D1%82-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BE%D0%BA?type=design&node-id=0-1).

Deploy [здесь](https://creative-elf-af0aca.netlify.app/).

### Состав проекта
***
Проект состоит из двух частей: бэкенд и фронтенд.
#### Бэкенд
Бекэнд: [YogaProgect](https://console.firebase.google.com/u/1/project/yoga-prodject/database/yoga-prodject-default-rtdb/data?hl=ru).
Бэкенд этого приложения реализован с помощью [![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)](https://firebase.google.com/)
#### Основные возможности бэкенда:
- Регистрация (log in)
- Возможность залогиниться и разлогиниться (sign up, sign out)
- Получение информации о текущем пользователе
- Добавление пользователю купленных курсов
- Смена логина пользователя
- Смена пароля пользователя
- Видеоматериалы тренировок
### Список экранов проекта 
***
#### Фронтенд
#### Экран авторизации
Пользователю предлагается ввести логин и пароль, если он уже зарегистрирован, и нажать "Войти". Если пользователь еще не зарегистрирован, ему необходимо нажать "Зарегистрироваться".

#### Экран регистрации
На экране регистрации пользователь придумывает логин и пароль. После этого он нажимает “Зарегистрироваться”. После регистрации пользователь сразу попадает на страницу профиля.

#### Главный экран
Главный экран, на котором отражаются все доступные виды тренировок. Пользователь на этом экране может выбрать любую тренировку которая ему понравилась.

#### Экран тренировки
На этом экране отображается описание тренировки выбранной на главном экране, прочитав это описание пользователь может решить стоит ли ему покупать этот курс тренировок, если ему это подходит на этом экрнае он может его приобрести.
#### Экран профиля
Здесь отображаются данные пользователя такие как логин, пароль и купленные курсы тренировок. На этом экране есть возможность перейти непосредственно к тренировке нажав кнопку "Перейти" на самой тренировке.
#### Экран выбора тренировки
Это скорее модальное окно в котором предоставлены все доступные тренировки по выбранному курсу.
#### Экран тренировки
Здесь пользователь может просмотреть видео тренировки повторяя за наставником, а также есть возможность увидеть наглядно свой прогресс.
#### Экран заполнения прогресса
Это также модальное окно с полями ввода, где пользователь имеет возможность записать количество повторений и сохранить свой прогресс, который сразу же отобразится на "Экране тренировки".

 ### _Запуск проекта_
***
1. Склонируйте репозиторий:
```
$ git clone https://github.com/SergeyHak/YogaProject
```
2. Установите зависимости:
```
$ npm i
```
3. Запустите проект:
```
$ npm start
```
### Разработчики проекта
***
[![Bloggez](https://img.shields.io/badge/Anton_Somikkk-FF5722?style=for-the-badge&logo=blogger&logoColor=white)](https://github.com/Anton-Somikkk) [![Ghost](https://img.shields.io/badge/irarekut-000?style=for-the-badge&logo=ghost&logoColor=%23F7DF1E)](https://github.com/irarekut) [![ChatGPT](https://img.shields.io/badge/Komarov_Georgy-74aa9c?style=for-the-badge&logo=openai&logoColor=white)](https://github.com/ckarnishon) [![Opera](https://img.shields.io/badge/SergeyHak-FF1B2D?style=for-the-badge&logo=Opera&logoColor=white)](https://github.com/SergeyHak)
