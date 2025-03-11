import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.projector.createMany({
    data: [
      {
        brand: 'Optoma',
        type: 'Lamp',
        model: 'W400LVe',
        price: '1 872,00',
        description:
          'DLP • Full 3D • WXGA (1280x800) • 4000 Lm • Контрастность 25 000:1 • Ручной  ZOOM 1,1X • TR=1,55-1,73:1 • HDMI ( V 1.4a ), VGA in, VGA out, video, audio in, audio out, USB A (  Питание 5В / 1A для Smart устройств ), RS232 • Коррекция трапеции  V ±40° (ручная) • Лампа 6000 - 10000 - 15000 ч. • Звук - 10 Вт • ШУМ 29/27 dB (eco) • 316 x 244 x 108  мм • вес 3,0 кг ',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/W400LVe.jpg?updatedAt=1739540801047',
        access: true,
      },
      {
        brand: 'Optoma',
        type: 'Laser',
        model: 'HZ40HDR',
        price: '4 992,00',
        description:
          'DLP • Full 3D • Лазерный • Full HD (1920 x 1080) / макс. 4K ( 4096 x 2160, 60 Гц ) • 4000 Lm • Контрастность 300 000:1 / 2 000 000 (динамическая) • ZOOM 1,1X • Проекционное отношение TR = 1,48-1,62 : 1 • HDMI 2.0 x 2, RS232, Audio out, USB A (питание 5В/1,5A) • Ручная Коррекция трапеции : Вертикальная V= ±30°, Горизонтальная H= ±30° • HDR • Шум 34 / 32 dB ( eco ) • Режим работы 24/7 • Поворот проектора вокруг оси на 360° и Портретный режим • Лазерный источник света до 30 000 часов • Потребляемая мощность : 139 Вт (max) / 88 (eco) / Внешний блок питания • Звук 15 Вт • Габариты : 274 x 216 x 114 мм • Вес 3,0 кг ( White )',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/HZ40HDR.jpg?updatedAt=1739541321072',
        access: true,
      },
      {
        brand: 'Optoma',
        type: 'Laser',
        model: 'ZH450',
        price: '8 532,00',
        description:
          'DLP • Full 3D • ЛАЗЕРНЫЙ (DuraCore) • Full HD (1920 x 1080) / макс. 4K ( 4096 x 2160, 60 Гц ) • 4500 Lm • Контрастность 300 000:1 / 2 000 000 (динамическая) • ZOOM 1,6X • Проекционное отношение TR = 1,4-2,24 : 1 • HDMI 1.4a x 2, LAN ( RJ45 ), RS232, Audio out, USB A (питание 5В/1,5A), Audio out • Ручная Коррекция трапеции : Вертикальная V= ±30°, Горизонтальная H= ±30° • HDR • ШУМ 34 / 32 dB ( eco ) • Режим работы 24/7 • IP6x - полная защита от пыли • Поворот проектора вокруг оси на 360° и Портретный режим • ЛАЗЕРНЫЙ ИСТОЧНИК  СВЕТА (DuraCore) до 30 000 часов • Потребляемая мощность : 173 Вт (max) / 119 (eco) • Звук 15 Вт • 274 x 216 x 114 мм • Вес 3,0 кг ( White )',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/ZH450.jpg?updatedAt=1739541716531',
        access: true,
      },
      {
        brand: 'Optoma',
        type: 'Laser',
        model: 'ZH520',
        price: '11 832,00',
        description:
          'DLP • Full 3D • Лазерный (DuraCore) • Full HD (1920 x 1080) / макс. 4K ( 4096 x 2160, 60 Гц ) • 5500 Lm • Контрастность 3 000 000 (динамическая) • ZOOM 1,3X • Проекционное отношение TR = 1,13-1,47 : 1 • HDMI 2.0 x 2, LAN ( RJ45 ), RS232, Audio out, USB A (питание 5В/1,5A) • Ручная Коррекция трапеции : Вертикальная V= ±30°, Горизонтальная H= ±30° • HDR • ШУМ 34 / 32 dB ( eco ) • Режим работы 24/7 • IP6x - полная защита от пыли • Поворот проектора вокруг оси на 360° и Портретный режим • Лазерный источник света (DuraCore) до 30 000 часов • Потребляемая мощность : 205 Вт (max) / 128 (eco) • Звук 15 Вт • Габариты : 274 x 216 x 108 мм • Вес 3,4 кг ( White )',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/ZH520.jpg?updatedAt=1739541977080',
        access: true,
      },
      {
        brand: 'Optoma',
        type: 'Laser',
        model: 'ZH350ST',
        price: '8 088,00',
        description:
          'DLP • Full 3D •  Лазерный Короткофокусный (DuraCore) • Full HD 1920 x 1080) • 3500 Lm • Контрастность 300 000:1 (динамическая 2 000 000 : 1) • Проекционное отношение TR = 0,496 : 1 • HDMI 2.0 x 2, RS232, Audio out, USB A (питание 5В/1,5A) • Ручная Коррекция трапеции : Вертикальная V= ±15°, Горизонтальная H= ±15° • HDR • Input lag 8,26 ms •  Режим работы 24/7 • IP6X - полная защита от пыли • Поворот проектора вокруг оси на 360° и Портретный режим • ШУМ 34 / 27 dB (eco) • Лазерный источник света (DuraCore) до 30 000 часов • Потребляемая мощность : 139 Вт (max) / 98 (eco) / Внешний блок питания • Звук 15 Вт • 274 x 216 x 114 мм • Вес 3,0 кг (White)',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/1714142475145-optoma-ZX350ST.jpg?updatedAt=1739362404016',
        access: true,
      },
      {
        brand: 'Optoma',
        type: 'Laser',
        model: 'ZK507-W',
        price: '24 840,00',
        description:
          'DLP • ЛАЗЕРНЫЙ DuraCore • 4K UHD ( 3840 x 2160 , max 4096x2160 / 2160p, матрица XPR 0,66” 2716 х 1528 ) • 5000  Lm • Контрастность 300 000 : 1 • Ручной ZOOM - 1,6X ( TR = 1,39-2,22 : 1 ) • Цветовое колесо RGBY • Обьектив с центральным расположением • V-Shift – Вертикальное Cмещение объектива + 15%  • Входы : HDMI 2.0, HDMI 1.4a ( поддержка MHL ) , VGA, RS232, RJ45, USB-A (питание 5В/1,5A ), USB-B, +12v Trigger, S/PDIF  • Режим 24/7 • Цветовое колесо RGBY • HDR •  ЗВУК – 2 x 5 Вт  • ЛАЗЕРНЫЙ ИСТОЧНИК  СВЕТА - 20 000 часов •  ШУМ - 30 dB (eco) • Габариты - 498 x 331 х 141 мм • Вес - 9,8 кг ( White )',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/1714142247325-optoma-ZK507-W.jpg?updatedAt=1739362402738',
        access: false,
      },
      {
        brand: 'Optoma',
        type: 'Laser',
        model: 'ZU820T',
        price: '35 232,00',
        description:
          'DLP (0,67” DMD) • Лазерный DuraCore • WUXGA (1920 x 1200) / макс. 4K (4096 x 2160 / 60 Гц) • 8800 Lm (7400 ANSI-lm) • Контрастность 3 000 000:1 (динамическая) • Моторизированный ZOOM 1,6x • Проекционный коэффициент TR = 1,25-2 : 1 • Смещение объектива (SHIFT) : V = ±55, H = ±25 • Равномерность светового потока 95% • HDBaseT, HDMI 2.0 ( HDCP 2.2 ), HDMI 1.4a, HDMI OUT, VGA in, LAN (RJ45), RS232, USB A (питание 5В/1,5A) x 2, Audio in, Audio out, RS-232C, +12v Trigger, 3D Sync, Wired IR in • Коррекция Трапеции : Вертикальная ±30°, Горизонтальная ±30°; Угловая коррекция, ГЕОМЕТРИЧЕСКАЯ • Full 3D • HDR • ШУМ 36 / 34 dB ( eco ) • Профессиональный инсталляционный • Режим работы 24/7 • Поворот проектора вокруг оси на 360° и Портретный режим • Лазерный источник света (DuraCore) до 30 000 часов • Звук 2 х 10 Вт • Размер : 486 x 432 x 176 мм • Вес 14 кг ( Черный )',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/1714142065571-optoma-ZU820T.jpg?updatedAt=1739362402456',
        access: false,
      },
      {
        brand: 'Optoma',
        type: 'Laser',
        model: 'ZU920T',
        price: '55 824,00',
        description:
          'DLP (0,67” DMD) • Лазерный (DuraCore) • WUXGA (1920 x 1200) / макс. 4K ( 3840 x 2160, 60 Гц ), HDR, матрица 0,67” DMD • 9800 Lm ( 8200 ANSI-lm ) • Контрастность 3 000 000:1 (динамическая)  • Моторизированный ZOOM 1,6X • Проекционный коэффициент TR = 1,25-2 : 1 • Смещение объектива (SHIFT) : V = ±55, H = ±25 • Равномерность светового потока 95% • HDBaseT, HDMI 2.0 ( HDCP 2.2 ), HDMI 1.4a, HDMI OUT, VGA in, LAN (RJ45), RS232, USB A (питание 5В/1,5A) x 2, Audio in, Audio out, RS-232C, +12v Trigger, 3D Sync, Wired IR in • Коррекция Трапеции : Вертикальная ±30°, Горизонтальная ±30°; Угловая коррекция, ГЕОМЕТРИЧЕСКАЯ • Full 3D • HDR • ШУМ 38 / 36 dB (eco) • Профессиональный инсталляционный • Режим работы 24/7 • Поворот проектора вокруг оси на 360° и Портретный режим • Лазерный источник света (DuraCore) до 30 000 часов • Звук 2 х 10 Вт • Размер : 484 x 179 x 376 мм • Вес 14 кг ( Черный )',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/1714141933520-optoma-ZU920T.jpg?updatedAt=1739362402728',
        access: false,
      },
      {
        brand: 'Optoma',
        type: 'Laser',
        model: 'ZU1100',
        price: '94 536,00',
        description:
          'DLP • MultiColor RB-Лазерный  ( MultiColor RB ) • WUXGA (1920 x 1200) • 11500 Lm • Контрастность 2 000 000:1 (ExtremeBlack) / 2000 : 1 ( Full on/off )  DuraCore • IP6X • Full 3D • Профессиональный инсталляционный • Режим работы 24/7 • Сменные объективы - 7 шт ( Проекционный коэффициент  = от 0,36 - до 5,5 : 1 ) • Моторизированный ZOOM и SHIFT ( Смещение объектива ): Вертикальное V ±50%, Горизонтальное H ±15% • HDBase-T, HDMI X 2, 3G-SDI, DVI-D, VGA in/out, Audio in / out, LAN (RJ45), USB A (питание 5В/1,5A), RS-232, 3D Sync in / out, mini USB ( сервис ), Wired Remote • Коррекция Трапеции : Вертикальная ±20° гр. и Горизонтальная ±20°, Угловая • Поворот проектора вокруг оси на 360° • MultiColor RB Лазерный источник света (DuraCore) до 30 000 часов • ШУМ 37/35 dB (eco) • 484 x 529 x 207 мм • Вес 21,0 кг ( без объектива )',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/1714141474034-optoma-ZU1100.jpg?updatedAt=1739362385097',
        access: false,
      },
      {
        brand: 'Optoma',
        type: 'Laser',
        model: 'ZU1300',
        price: '120 264,00',
        description:
          'DLP • MultiColor RB-Лазерный  ( MultiColor RB ) • WUXGA (1920 x 1200) • 14400 Lm • Контрастность 2 000 000:1 (ExtremeBlack) / 2000 : 1 ( Full on/off )  DuraCore • IP6X • Full 3D • Профессиональный инсталляционный • Режим работы 24/7 • Сменные объективы - 7 шт ( Проекционный коэффициент  = от 0,36 - до 5,5 : 1 ) • Моторизированный ZOOM и SHIFT ( Смещение объектива ): Вертикальное V ±50%, Горизонтальное H ±15% • HDBase-T, HDMI X 2, 3G-SDI, DVI-D, VGA in/out, Audio in / out, LAN (RJ45), USB A (питание 5В/1,5A), RS-232, 3D Sync in / out, mini USB ( сервис ), Wired Remote • Коррекция Трапеции : Вертикальная ±20° гр. и Горизонтальная ±20°, Угловая • Поворот проектора вокруг оси на 360° • MultiColor RB Лазерный источник света (DuraCore) до 30 000 часов • ШУМ 37/35 dB (eco) • 484 x 529 x 208 мм • Вес 21,0 кг ( без объектива )',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/1714141343733-optoma-ZU1300.jpg?updatedAt=1739362383470',
        access: false,
      },
      {
        brand: 'Optoma',
        type: 'Laser',
        model: 'ZU1700',
        price: '157 440,00',
        description:
          'Профессиональный инсталляционный DLP • Full 3D • DuraCore MCL ( MultiColor RB-Laser ) • WUXGA (1920 x 1200) • 17000 Lm ( 14500 Lm ) • Контрастность 2 000 000:1 • IP6X • Режим работы 24/7 • Сменные объективы - 8 шт ( Проекционный коэффициент : от 0,65 до 10,8 : 1 ) • Моторизированный ZOOM и SHIFT ( Смещение объектива ): Вертикальное V ±60%, Горизонтальное H ±25% • HDBaseT, DisplayPort, HDMI in x 2,  HDMI  out, VGA in, DVI-D, LAN (RJ45), RS232 in/out, USB A ( Питание 5В/0,5A), 3D sync in/out, Проводной пульт ДУ, 3G-SDI in/out, +12v Trigger • Коррекция Трапеции : Вертикальная ±40° гр. и Горизонтальная ±40°, Угловая • Поворот проектора вокруг оси на 360° • Источник света : DuraCore MCL ( MultiColor RB-Laser ) до 30 000 часов • ШУМ 38/36 dB (eco) • Потребляемая мощность : 460 - 1000 Вт • 650 x 682 x 300 мм • Вес 50,0 кг ( без объектива )',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/1714141183304-optoma-ZU1700.jpg?updatedAt=1739362385538',
        access: false,
      },
      {
        brand: 'Optoma',
        type: 'Laser',
        model: 'ZU1900',
        price: '183 984,00',
        description:
          'Профессиональный инсталляционный DLP • Full 3D • DuraCore MCL ( MultiColor RB-Laser ) • WUXGA (1920 x 1200) • 19000 Lm ( 16000 Lm ) • Контрастность 2 000 000:1 • IP6X • Режим работы 24/7 • Сменные объективы - 8 шт ( Проекционный коэффициент : от 0,65 до 10,8 : 1 ) • Моторизированный ZOOM и SHIFT ( Смещение объектива ): Вертикальное V ±60%, Горизонтальное H ±25% • HDBaseT, DisplayPort, HDMI in x 2,  HDMI  out, VGA in, DVI-D, LAN (RJ45), RS232 in/out, USB A ( Питание 5В/0,5A), 3D sync in/out, Проводной пульт ДУ, 3G-SDI in/out, +12v Trigger • Коррекция Трапеции : Вертикальная ±40° гр. и Горизонтальная ±40°, Угловая • Поворот проектора вокруг оси на 360° • Источник света : DuraCore MCL ( MultiColor RB-Laser ) до 30 000 часов • ШУМ 38/36 dB (eco) • Потребляемая мощность : 460 - 1000 Вт • 650 x 682 x 300 мм • Вес 50,0 кг ( без объектива )',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/1714141024260-optoma-ZU1900.jpg?updatedAt=1739360371626',
        access: false,
      },
      {
        brand: 'Optoma',
        type: 'Laser',
        model: 'ZU2200',
        price: '229 268,00',
        description:
          'Профессиональный инсталляционный DLP • Full 3D • DuraCore MCL ( MultiColor RB-Laser ) • WUXGA (1920 x 1200) • 22000 Lm ( 18500 Lm ) • Контрастность 2 000 000:1 • IP6X • Режим работы 24/7 • Сменные объективы - 8 шт ( Проекционный коэффициент : от 0,65 до 10,8 : 1 ) • Моторизированный ZOOM и SHIFT ( Смещение объектива ): Вертикальное V ±60%, Горизонтальное H ±25% • HDBaseT, DisplayPort, HDMI in x 2,  HDMI  out, VGA in, DVI-D, LAN (RJ45), RS232 in/out, USB A ( Питание 5В/0,5A), 3D sync in/out, Проводной пульт ДУ, 3G-SDI in/out, +12v Trigger • Коррекция Трапеции : Вертикальная ±40° гр. и Горизонтальная ±40°, Угловая • Поворот проектора вокруг оси на 360° • Источник света : DuraCore MCL ( MultiColor RB-Laser ) до 30 000 часов • ШУМ 40/38 dB (eco) • Потребляемая мощность : 590 - 1200 Вт • 650 x 682 x 300 мм • Вес 54,0 кг ( без объектива )',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/1714140830895-optoma-ZU2200.jpg?updatedAt=1739360073416',
        access: false,
      },
      {
        brand: 'InFocus',
        type: 'Lamp',
        model: 'SP222',
        price: '1 608,00',
        description:
          'DLP • SVGA (800 x 600) / макс. WUXGA (1920 x 1200) • 4000 Lm • Контрастность 30 000:1 • Ручной  ZOOM 1,1x • TR=1,94-2,16: 1 • HDMI x 2, VGA in, VGA out, S-Video, audio in, audio out, RS232, USB A ( Питание 5В / 1A для Smart устройств ) • Full 3D • Коррекция трапеции  V ±40° (ручная) • Шум 27 dB (eco) •  Лампа : до 15000 ч. • Звук 3 Вт • 313 x 236 x 97 мм • вес 2,9 кг',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/SP222.jpg?updatedAt=1739545268195',
        access: true,
      },
      {
        brand: 'InFocus',
        type: 'Lamp',
        model: 'SP124',
        price: '1 728,00',
        description:
          'DLP • XGA (1024 x 768) / макс. WUXGA (1920 x1200) • 4000 Lm • Контрастность 30 000:1 •  Ручной  ZOOM 1,1x • TR=1,94-2,16 : 1 • HDMI 1.4, VGA in, VGA, S-VIDEO, audio in/out, USB A (Питание 5В / 1A) • Full 3D • Коррекция трапеции  V ±40° (ручная) • Лампа : до 15000 ч. • Звук 3 Вт • 313 x 236 x 97 мм • вес 2,9 кг',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/SP124.jpg?updatedAt=1739546269982',
        access: true,
      },
      {
        brand: 'InFocus',
        type: 'Lamp',
        model: 'SP126',
        price: '1 956,00',
        description:
          'DLP • WXGA (1280 x 800) / макс. WUXGA (1920 x1200) • 4000 Lm • Контрастность 30 000:1 •  Ручной  ZOOM 1,1x • TR=1,54-1,72 : 1 • HDMI 1.4, VGA in, VGA, S-VIDEO, audio in/out, USB A (Питание 5В/1,5A) • Full 3D • Коррекция трапеции  V ±40° (ручная) • Лампа : до 15000 ч. • Звук 3 Вт • 313 x 236 x 97 мм • вес 2,9 кг ',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/SP126.jpg?updatedAt=1739723761418',
        access: true,
      },
      {
        brand: 'InFocus',
        type: 'Lamp',
        model: 'SP224',
        price: '1 908,00',
        description:
          'DLP • XGA (1024 x 768) / макс. WUXGA (1920 x1200) • 4000 Lm • Контрастность 30 000:1 •  Ручной  ZOOM 1,1x • TR=1,94-2,16 : 1 • HDMI 1.4 x 2, VGA in, VGA out, S-VIDEO, audio in, audio out, USB A (  Питание 5В / 1A ), RS232 • Full 3D • Коррекция трапеции  V ±40° (ручная) • Лампа : до 15000 ч. • Звук 10 Вт • 313 x 236 x 97 мм • вес 2,9 кг',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/1714143405376-infocus-SP224.png?updatedAt=1739362412789',
        access: true,
      },
      {
        brand: 'InFocus',
        type: 'Lamp',
        model: 'SP226',
        price: '2 064,00',
        description:
          'DLP • WXGA (1280 x 800) / макс. WUXGA (1920 x1200) • 4000 Lm • Контрастность 30 000:1 •  Ручной  ZOOM 1,1x • TR=1,54-1,72 : 1 • HDMI 1.4 x 2, VGA in, VGA out, S-VIDEO, audio in, audio out, USB A (  Питание 5В/1A ), RS232 • Full 3D • Коррекция трапеции  V ±40° (ручная) • Лампа : до 15000 ч. • Звук 3 Вт • 313 x 236 x 97 мм • вес 2,9 кг ',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/1714143520863-infocus-SP226.png?updatedAt=1739362402449',
        access: true,
      },
      {
        brand: 'InFocus',
        type: 'Lamp',
        model: 'SP224ST',
        price: '2 688,00',
        description:
          'DLP • XGA (1024 x 768) / макс. WUXGA (1920 x 1200) • 3800 Lm • Контрастность 30 000:1 • TR=0,52 : 1 • HDMI 1.4 x 2, VGA in, VGA out, S-Video, audio in, audio out, USB A (Питание 5В / 1A), RS232 • Full 3D • Коррекция трапеции  V ±20° (ручная) • Лампа : до 15000 ч. • Звук 10 Вт • 313 x 236 x 97 мм • вес 2,9 кг ',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/SP224ST.jpg?updatedAt=1739724269024',
        access: true,
      },
      {
        brand: 'InFocus',
        type: 'Lamp',
        model: 'IN136ST',
        price: '2 832,00',
        description:
          'DLP • WXGA (1280 x 800) • 4000 Lm • Контрастность 28 500:1 • TR=0,52 : 1 • HDMI 1.4 x 2, VGA in, VGA out, Video, audio in, audio out, USB A (Питание 5В / 1A), LAN (RJ45), RS232 • Full 3D • Коррекция трапеции  V ±20° (ручная) • Шум 21 dB (eco) • Лампа : до 15000 ч. • Звук 10 Вт • Габариты : 125 x 312 x 97 мм • вес 3,2 кг ',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/IN136ST.jpg?updatedAt=1739725609082',
        access: true,
      },
      {
        brand: 'InFocus',
        type: 'Laser',
        model: 'INL148',
        price: '3 678,00',
        description:
          'DLP • Full 3D • Лазерный ( Quantum Laser ) • Full HD (1920 x 1080) / макс. 4K ( 3840 x 2160 / 60 Гц) • 3000 Lm • Контрастность 2 000 000 (динамическая) • ZOOM 1,3X • Проекционный коэффициент TR = 1,13-1,47 : 1 • HDMI 2.0 ( HDCP 2.2 ), HDMI 1.4a, VGA in, RS232, USB A (питание 5В/1,5A), Video in, Audio in/out, micro USB ( сервис ) • Коррекция Трапеции : АВТО + ручная Вертикальная ±30° • DICOM • HDR/HLG , 4K UHD 2160p • ШУМ 30 / 28 dB ( eco ) • Режим работы 24/7 • Поворот проектора вокруг оси на 360° и Портретный режим • Лазерный источник света ( Quantum Laser ) до 30 000 часов • Звук 15 Вт • Потребляемая мощность : 161 Вт (max) / 138 (eco) • Габариты : 337 x 265 x 119,3 мм • Вес 3,9 кг ( White )',
        image:
          'https://ik.imagekit.io/dku5gkauv/projectors/1714161832875-infocus-INL148.jpg?updatedAt=1739362383996',
        access: true,
      },
    ],
  });

  console.log('Database seeded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
