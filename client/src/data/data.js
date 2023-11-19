import burger1 from '../assets/burger1.jpg'
import burger2 from '../assets/burger2.jpg'
import burger3 from '../assets/burger3.jpg'
import burger4 from '../assets/burger4.jpg'
import burger5 from '../assets/burger5.jpg'

import tikichat1 from '../assets/tikichat1.jpg'
import tikichat2 from '../assets/tikichat2.jpg'
import tikichat3 from '../assets/tikichat3.jpg'
import tikichat4 from '../assets/tikichat4.jpg'
import tikichat5 from '../assets/tikichat5.jpg'

import pizza1 from '../assets/pizza1.jpg'
import pizza2 from '../assets/pizza2.jpg'
import pizza3 from '../assets/pizza3.jpg'
import pizza4 from '../assets/pizza4.jpg'
import pizza5 from '../assets/pizza5.jpg'

import pasta1 from '../assets/pasta1.jpg'
import pasta2 from '../assets/pasta2.jpg'
import pasta3 from '../assets/pasta3.jpg'
import pasta4 from '../assets/pasta4.jpg'
import pasta5 from '../assets/pasta5.jpg'

import chowmin1 from '../assets/chowmin1.jpg'
import chowmin2 from '../assets/chowmin2.jpg'
import chowmin3 from '../assets/chowmin3.jpg'
import chowmin4 from '../assets/chowmin4.jpg'
import chowmin5 from '../assets/chowmin5.jpg'

import momos1 from '../assets/momos1.jpg'
import momos2 from '../assets/momos2.jpg'
import momos3 from '../assets/momos3.jpg'
import momos4 from '../assets/momos4.jpg'
import momos5 from '../assets/momos5.jpg'

import roll1 from '../assets/roll1.jpg'
import roll2 from '../assets/roll2.jpg'
import roll3 from '../assets/roll3.jpg'
import roll4 from '../assets/roll4.jpg'
import roll5 from '../assets/roll5.jpg'
import roll6 from '../assets/roll6.png'

import fries1 from '../assets/fries1.jpg'
import fries2 from '../assets/fries2.jpg'
import fries3 from '../assets/fries3.jpg'
import fries4 from '../assets/fries4.jpg'
import fries5 from '../assets/fries5.jpg'

import petis1 from '../assets/petis1.jpeg'
import petis2 from '../assets/petis2.jpg'
import petis3 from '../assets/petis3.jpg'
import petis4 from '../assets/petis4.jpg'
import petis5 from '../assets/petis5.jpg'

import petis6 from '../assets/petis1.png'


export const foodTypes = [
    {
        name: 'burger',
        img: burger1,
        id: crypto.randomUUID()
    },
    {
        name: 'tikichat',
        img: tikichat3,
        id: crypto.randomUUID()
    },
    {
        name: 'pizza',
        img: pizza1,
        id: crypto.randomUUID()
    },
    {
        name: 'pasta',
        img: pasta1,
        id: crypto.randomUUID()
    },
    {
        name: 'chowmin',
        img: chowmin1,
        id: crypto.randomUUID()
    },
    {
        name: 'momos',
        img: momos1,
        id: crypto.randomUUID()
    },
    {
        name: 'roll',
        img: roll1,
        id: crypto.randomUUID()
    },
    {
        name: 'fries',
        img: fries1,
        id: crypto.randomUUID()
    },
    {
        name: 'petis',
        img: petis6,
        id: crypto.randomUUID()
    },

]


// 24 foods (6 burger, 6 gyros, 6 pizza, 6 pasta)
export const foods = [
    {
        name: 'Burger 1',
        category: 'burger',
        img: burger1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 2',
        category: 'burger',
        img: burger2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 3',
        category: 'burger',
        img: burger3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 4',
        category: 'burger',
        img: burger4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 5',
        category: 'burger',
        img: burger5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 1',
        category: 'pizza',
        img: pizza1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 2',
        category: 'pizza',
        img: pizza2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 3',
        category: 'pizza',
        img: pizza3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 4',
        category: 'pizza',
        img: pizza4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 5',
        category: 'pizza',
        img: pizza5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'tikichat 1',
        category: 'tikichat',
        img: tikichat1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'tikichat 2',
        category: 'tikichat',
        img: tikichat2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'tikichat 3',
        category: 'tikichat',
        img: tikichat3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'tikichat 4',
        category: 'tikichat',
        img: tikichat4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'tikichat 5',
        category: 'tikichat',
        img: tikichat5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 1',
        category: 'pasta',
        img: pasta1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 2',
        category: 'pasta',
        img: pasta2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 3',
        category: 'pasta',
        img: pasta3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 4',
        category: 'pasta',
        img: pasta4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 5',
        category: 'pasta',
        img: pasta5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },

    {
        name: 'chowmin 1',
        category: 'chowmin',
        img: chowmin1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'chowmin 2',
        category: 'chowmin',
        img: chowmin2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'chowmin 3',
        category: 'chowmin',
        img: chowmin3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'chowmin 4',
        category: 'chowmin',
        img: chowmin4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'chowmin 5',
        category: 'chowmin',
        img: chowmin5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },

    {
        name: 'momos 1',
        category: 'momos',
        img: momos1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'momos 2',
        category: 'momos',
        img: momos2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'momos 3',
        category: 'momos',
        img: momos3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'momos 4',
        category: 'momos',
        img: momos4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'momos 5',
        category: 'momos',
        img: momos5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },

    {
        name: 'roll 1',
        category: 'roll',
        img: roll1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'roll 2',
        category: 'roll',
        img: roll2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'roll 3',
        category: 'roll',
        img: roll3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'roll 4',
        category: 'roll',
        img: roll4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'roll 5',
        category: 'roll',
        img: roll5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'roll 6',
        category: 'roll',
        img: roll6,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },

    {
        name: 'fries 1',
        category: 'fries',
        img: fries1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'fries 2',
        category: 'fries',
        img: fries2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'fries 3',
        category: 'fries',
        img: fries3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'fries 4',
        category: 'fries',
        img: fries4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'fries 5',
        category: 'fries',
        img: fries5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },

    {
        name: 'petis 1',
        category: 'petis',
        img: petis1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'petis 2',
        category: 'petis',
        img: petis2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'petis 3',
        category: 'petis',
        img: petis3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'petis 4',
        category: 'petis',
        img: petis4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'petis 5',
        category: 'petis',
        img: petis5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
]