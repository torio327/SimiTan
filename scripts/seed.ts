import "dotenv/config";
import {neon} from "@neondatabase/serverless";
import {drizzle} from "drizzle-orm/neon-http";
import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
//@ts-ignore
const db = drizzle(sql, {schema})

const main = async () => {
    try {
        await db.delete(schema.courses)
        await db.delete(schema.units)
        await db.delete(schema.userProgress)
        await db.delete(schema.answers)
        await db.delete(schema.challenges)
        await db.delete(schema.challengeProgress)

        await db.insert(schema.courses).values([
            {
                id: 1,
                courseName: "初級英単語",
                courseImage: "/redEgg.png",
            },
            {
                id: 2,
                courseName: "中級英単語",
                courseImage: "/Chick.svg",
            },
            {
                id: 3,
                courseName: "上級英単語",
                courseImage: "/Chiken.svg"
            }
        ])

        await db.insert(schema.units).values([
            {
                id: 1,
                unitName: "1から10",
                courseId: 1,
                order: 1,
            },
            {
                id: 2,
                unitName: "11から20",
                courseId: 1,
                order: 2
            },
            {
                id: 3,
                unitName: "21から30",
                courseId: 1,
                order: 3
            },
            {
                id: 4,
                unitName: "31から40",
                courseId: 1,
                order: 4
            },
            {
                id: 5,
                unitName: "41から50",
                courseId: 1,
                order: 5,
            },
            {
                id: 6,
                unitName: "51から60",
                courseId: 1,
                order: 6
            },
            {
                id: 7,
                unitName: "61から70",
                courseId: 2,
                order:7
            },
            {
                id: 8,
                unitName: "71から80",
                courseId: 2,
                order: 8
            },
            {
                id: 9,
                unitName: "81から90",
                courseId: 2,
                order: 9
            },
            {
                id: 10,
                unitName: "91から100",
                courseId: 2,
                order: 10,
            },
            {
                id: 11,
                unitName: "101から110",
                courseId: 2,
                order: 11
            },
            {
                id: 12,
                unitName: "111から120",
                courseId: 2,
                order: 12
            },
            {
                id: 13,
                unitName: "121から130",
                courseId: 3,
                order: 13
            },
            {
                id: 14,
                unitName: "131から140",
                courseId: 3,
                order: 14
            },
            {
                id: 15,
                unitName: "141から150",
                courseId: 3,
                order: 15
            },
            {
                id: 16,
                unitName: "151から160",
                courseId: 3,
                order: 16
            },
            {
                id: 17,
                unitName: "161から170",
                courseId: 3,
                order: 17
            },
            {
                id: 18,
                unitName: "171から180",
                courseId: 3,
                order: 18
            },
            {
                id: 19,
                unitName: "181から190",
                courseId: 3,
                order: 19
            },
            {
                id: 20,
                unitName: "191から200",
                courseId: 3,
                order: 20
            },


        ])

        await db.insert(schema.challenges).values([
            {
                "id": 1,
                "question": "It is important to set (priority) when you are busy.",
                "word": "priority",
                "order": 1,
                "unitId": 1
            },
            {
                "id": 2,
                "question": "There were many (obstacle)s to overcome on the journey.",
                "word": "obstacle",
                "order": 2,
                "unitId": 1
            },
            {
                "id": 3,
                "question": "I have a (appetite) for pizza today.",
                "word": "appetite",
                "order": 3,
                "unitId": 1
            },
            {
                "id": 4,
                "question": "There was a lot of (tension) in the air before the exam.",
                "word": "tension",
                "order": 4,
                "unitId": 1
            },
            {
                "id": 5,
                "question": "The (tribe) lives in the Amazon rainforest.",
                "word": "tribe",
                "order": 5,
                "unitId": 1
            },
            {
                "id": 6,
                "question": "We need to create a (budget) for the project.",
                "word": "budget",
                "order": 6,
                "unitId": 1
            },
            {
                "id": 7,
                "question": "She is running a (campaign) for president.",
                "word": "campaign",
                "order": 7,
                "unitId": 1
            },
            {
                "id": 8,
                "question": "I felt a deep sense of (sorrow) after the loss of my friend.",
                "word": "sorrow",
                "order": 8,
                "unitId": 1
            },
            {
                "id": 9,
                "question": "There are many (satellite)s orbiting the Earth.",
                "word": "satellite",
                "order": 9,
                "unitId": 1
            },
            {
                "id": 10,
                "question": "The scientist had a (insight) into the problem.",
                "word": "insight",
                "order": 10,
                "unitId": 1
            },
            {
                "id": 11,
                "question": "He had a bad (cough).",
                "word": "cough",
                "order": 11,
                "unitId": 2
            },
            {
                "id": 12,
                "question": "It was their (fate) to meet.",
                "word": "fate",
                "order": 12,
                "unitId": 2
            },
            {
                "id": 13,
                "question": "He had a cunning (scheme) to take over the company.",
                "word": "scheme",
                "order": 13,
                "unitId": 2
            },
            {
                "id": 14,
                "question": "His words were a (insult) to her intelligence.",
                "word": "insult",
                "order": 14,
                "unitId": 2
            },
            {
                "id": 15,
                "question": "The (inhabitant)s of the town were very friendly.",
                "word": "inhabitant",
                "order": 15,
                "unitId": 2
            },
            {
                "id": 16,
                "question": "The dinosaur (fossil)s were found in the desert.",
                "word": "fossil",
                "order": 16,
                "unitId": 2
            },
            {
                "id": 17,
                "question": "What was her (motive) for doing it?",
                "word": "motive",
                "order": 17,
                "unitId": 2
            },
            {
                "id": 18,
                "question": "The bird followed its (instinct) to build a nest in the tree.",
                "word": "instinct",
                "order": 18,
                "unitId": 2
            },
            {
                "id": 19,
                "question": "The (legend) of King Arthur has been told for centuries.",
                "word": "legend",
                "order": 19,
                "unitId": 2
            },
            {
                "id": 20,
                "question": "The Roman (empire) was once very powerful.",
                "word": "empire",
                "order": 20,
                "unitId": 2
            },
            {
                "id": 21,
                "question": "They live in a quiet (suburb).",
                "word": "suburb",
                "order": 21,
                "unitId": 3
            },
            {
                "id": 22,
                "question": "The (architecture) of the building is very impressive.",
                "word": "architecture",
                "order": 22,
                "unitId": 3
            },
            {
                "id": 23,
                "question": "She has a (passion) for music.",
                "word": "passion",
                "order": 23,
                "unitId": 3
            },
            {
                "id": 24,
                "question": "It is a serious form of (cancer).",
                "word": "cancer",
                "order": 24,
                "unitId": 3
            },
            {
                "id": 25,
                "question": "His argument was very (logic).",
                "word": "logic",
                "order": 25,
                "unitId": 3
            },
            {
                "id": 26,
                "question": "I bought a (dozen) of eggs.",
                "word": "dozen",
                "order": 26,
                "unitId": 3
            },
            {
                "id": 27,
                "question": "The farmers had a good (harvest) this year.",
                "word": "harvest",
                "order": 27,
                "unitId": 3
            },
            {
                "id": 28,
                "question": "What are the (ingredient)s in this cake?",
                "word": "ingredient",
                "order": 28,
                "unitId": 3
            },
            {
                "id": 29,
                "question": "The scientist had a (hypothesis) about the cause of the disease.",
                "word": "hypothesis",
                "order": 29,
                "unitId": 3
            },
            {
                "id": 30,
                "question": "The explorer went on a long (voyage) to discover new lands.",
                "word": "voyage",
                "order": 30,
                "unitId": 3
            },
            {
                "id": 31,
                "question": "She is an (editor) of a popular magazine.",
                "word": "editor",
                "order": 31,
                "unitId": 4
            },
            {
                "id": 32,
                "question": "I have several (option)s for dinner.",
                "word": "option",
                "order": 32,
                "unitId": 4
            },
            {
                "id": 33,
                "question": "The Earth is divided into two (hemisphere)s.",
                "word": "hemisphere",
                "order": 33,
                "unitId": 4
            },
            {
                "id": 34,
                "question": "How does the (mechanism) of this engine work?",
                "word": "mechanism",
                "order": 34,
                "unitId": 4
            },
            {
                "id": 35,
                "question": "She is an (anthropologist) who studies human cultures.",
                "word": "anthropologist",
                "order": 35,
                "unitId": 4
            },
            {
                "id": 36,
                "question": "The play was a (tragedy) about a family's loss.",
                "word": "tragedy",
                "order": 36,
                "unitId": 4
            },
            {
                "id": 37,
                "question": "This medicine is an (antibiotic) to fight bacteria.",
                "word": "antibiotic",
                "order": 37,
                "unitId": 4
            },
            {
                "id": 38,
                "question": "How much is the (fare) to the airport?",
                "word": "fare",
                "order": 38,
                "unitId": 4
            },
            {
                "id": 39,
                "question": "He has a lot of (debt) to pay off.",
                "word": "debt",
                "order": 39,
                "unitId": 4
            },
            {
                "id": 40,
                "question": "The school offers a variety of (curriculum)s.",
                "word": "curriculum",
                "order": 40,
                "unitId": 4
            },
            {
                "id": 41,
                "question": "The car is made up of many different (component)s.",
                "word": "component",
                "order": 41,
                "unitId": 4
            },
            {
                "id": 42,
                "question": "Bread is made from (wheat).",
                "word": "wheat",
                "order": 42,
                "unitId": 4
            },
            {
                "id": 43,
                "question": "What is the correct (usage) of this word?",
                "word": "usage",
                "order": 43,
                "unitId": 4
            },
            {
                "id": 44,
                "question": "The princess lived in a beautiful (castle).",
                "word": "castle",
                "order": 44,
                "unitId": 4
            },
            {
                "id": 45,
                "question": "There was a terrible (famine) in the country.",
                "word": "famine",
                "order": 45,
                "unitId": 4
            },
            {
                "id": 46,
                "question": "The dinosaurs died out due to (extinction).",
                "word": "extinction",
                "order": 46,
                "unitId": 4
            },
            {
                "id": 47,
                "question": "She kept her money in her (purse).",
                "word": "purse",
                "order": 47,
                "unitId": 4
            },
            {
                "id": 48,
                "question": "The (folk) tales have been passed down for generations.",
                "word": "folk",
                "order": 48,
                "unitId": 4
            },
            {
                "id": 49,
                "question": "There was a loud (explosion) in the building.",
                "word": "explosion",
                "order": 49,
                "unitId": 4
            },
            {
                "id": 50,
                "question": "I want a small (portion) of pizza.",
                "word": "portion",
                "order": 50,
                "unitId": 4
            },
            {
                "id": 51,
                "question": "All living things are (organism)s.",
                "word": "organism",
                "order": 51,
                "unitId": 5
            },
            {
                "id": 52,
                "question": "The (merchant) sold spices and silks.",
                "word": "merchant",
                "order": 52,
                "unitId": 5
            },
            {
                "id": 53,
                "question": "The (myth) of Zeus and Hera is well-known.",
                "word": "myth",
                "order": 53,
                "unitId": 5
            },
            {
                "id": 54,
                "question": "There was a strange (incident) at the store yesterday.",
                "word": "incident",
                "order": 54,
                "unitId": 5
            },
            {
                "id": 55,
                "question": "The (wildlife) of the Amazon rainforest is amazing.",
                "word": "wildlife",
                "order": 55,
                "unitId": 5
            },
            {
                "id": 56,
                "question": "The (congress) makes laws for the country.",
                "word": "congress",
                "order": 56,
                "unitId": 5
            },
            {
                "id": 57,
                "question": "The city is located on a beautiful (bay).",
                "word": "bay",
                "order": 57,
                "unitId": 5
            },
            {
                "id": 58,
                "question": "He was given a (penalty) for speeding.",
                "word": "penalty",
                "order": 58,
                "unitId": 5
            },
            {
                "id": 59,
                "question": "The old castle is a UNESCO World (heritage).",
                "word": "heritage",
                "order": 59,
                "unitId": 5
            },
            {
                "id": 60,
                "question": "The rainforest is home to a great (diversity) of plants and animals.",
                "word": "diversity",
                "order": 60,
                "unitId": 5
            },
            {
                "id": 61,
                "question": "I cut my (thumb) while chopping vegetables.",
                "word": "thumb",
                "order": 61,
                "unitId": 6
            },
            {
                "id": 62,
                "question": "I love studying (geography).",
                "word": "geography",
                "order": 62,
                "unitId": 6
            },
            {
                "id": 63,
                "question": "There are many (factor)s that contribute to climate change.",
                "word": "factor",
                "order": 63,
                "unitId": 6
            },
            {
                "id": 64,
                "question": "People should be treated equally, regardless of their race or gender. (discrimination) is wrong.",
                "word": "discrimination",
                "order": 64,
                "unitId": 6
            },
            {
                "id": 65,
                "question": "The (virus) caused a worldwide pandemic.",
                "word": "virus",
                "order": 65,
                "unitId": 6
            },
            {
                "id": 66,
                "question": "The Statue of Liberty is a famous (statue) in New York City.",
                "word": "statue",
                "order": 66,
                "unitId": 6
            },
            {
                "id": 67,
                "question": "The (priest) performed the wedding ceremony.",
                "word": "priest",
                "order": 67,
                "unitId": 6
            },
            {
                "id": 68,
                "question": "She was a (pioneer) in the field of women's rights.",
                "word": "pioneer",
                "order": 68,
                "unitId": 6
            },
            {
                "id": 69,
                "question": "Dogs are known for their loyalty, which is one of their many positive (trait)s.",
                "word": "trait",
                "order": 69,
                "unitId": 6
            },
            {
                "id": 70,
                "question": "The (bond) between mother and child is very strong.",
                "word": "bond",
                "order": 70,
                "unitId": 6
            },
            {
                "id": 71,
                "question": "I need to go to the store to buy some (grocery).",
                "word": "grocery",
                "order": 71,
                "unitId": 7
            },
            {
                "id": 72,
                "question": "She is the (secretary) to the CEO.",
                "word": "secretary",
                "order": 72,
                "unitId": 7
            },
            {
                "id": 73,
                "question": "There are many different (dialect)s of the English language.",
                "word": "dialect",
                "order": 73,
                "unitId": 7
            },
            {
                "id": 74,
                "question": "The study of stars and planets is called (astronomy).",
                "word": "astronomy",
                "order": 74,
                "unitId": 7
            },
            {
                "id": 75,
                "question": "The (youngster)s were playing in the park.",
                "word": "youngster",
                "order": 75,
                "unitId": 7
            },
            {
                "id": 76,
                "question": "Everything is made up of (substance)s.",
                "word": "substance",
                "order": 76,
                "unitId": 7
            },
            {
                "id": 77,
                "question": "The scientists made an important (finding).",
                "word": "finding",
                "order": 77,
                "unitId": 7
            },
            {
                "id": 78,
                "question": "The company has a new (strategy) for marketing its products.",
                "word": "strategy",
                "order": 78,
                "unitId": 7
            },
            {
                "id": 79,
                "question": "We breathe with our (lung)s.",
                "word": "lung",
                "order": 79,
                "unitId": 7
            },
            {
                "id": 80,
                "question": "Our team played against a tough (opponent) in the championship game.",
                "word": "opponent",
                "order": 80,
                "unitId": 7
            },
            {
                "id": 81,
                "question": "The tribe performed a special (ritual) to celebrate the harvest.",
                "word": "ritual",
                "order": 81,
                "unitId": 8
            },
            {
                "id": 82,
                "question": "What was the (outcome) of the election?",
                "word": "outcome",
                "order": 82,
                "unitId": 8
            },
            {
                "id": 83,
                "question": "It's important to protect our planet through (conservation).",
                "word": "conservation",
                "order": 83,
                "unitId": 8
            },
            {
                "id": 84,
                "question": "Humans are (mammal)s.",
                "word": "mammal",
                "order": 84,
                "unitId": 8
            },
            {
                "id": 85,
                "question": "I used a (telescope) to look at the stars.",
                "word": "telescope",
                "order": 85,
                "unitId": 8
            },
            {
                "id": 86,
                "question": "Many people have become (refugee)s due to war and persecution.",
                "word": "refugee",
                "order": 86,
                "unitId": 8
            },
            {
                "id": 87,
                "question": "There are many (code)s to follow when writing a computer program.",
                "word": "code",
                "order": 87,
                "unitId": 8
            },
            {
                "id": 88,
                "question": "This ice cream has a delicious (flavor).",
                "word": "flavor",
                "order": 88,
                "unitId": 8
            },
            {
                "id": 89,
                "question": "Everything is made up of tiny (particle)s.",
                "word": "particle",
                "order": 89,
                "unitId": 8
            },
            {
                "id": 90,
                "question": "She is a (nursing) at the hospital.",
                "word": "nursing",
                "order": 90,
                "unitId": 8
            },
            {
                "id": 91,
                "question": "It is important to seek help if you are feeling (suicide)l.",
                "word": "suicide",
                "order": 91,
                "unitId": 9
            },
            {
                "id": 92,
                "question": "Many animals are losing their natural (habitat) due to deforestation.",
                "word": "habitat",
                "order": 92,
                "unitId": 9
            },
            {
                "id": 93,
                "question": "(Bullying) is a serious problem that can have lasting effects on victims.",
                "word": "bullying",
                "order": 93,
                "unitId": 9
            },
            {
                "id": 94,
                "question": "(Dinosaur)s roamed the Earth millions of years ago.",
                "word": "dinosaur",
                "order": 94,
                "unitId": 9
            },
            {
                "id": 95,
                "question": "The city (council) is responsible for making decisions about local issues.",
                "word": "council",
                "order": 95,
                "unitId": 9
            },
            {
                "id": 96,
                "question": "People should be treated equally regardless of their (gender).",
                "word": "gender",
                "order": 96,
                "unitId": 9
            },
            {
                "id": 97,
                "question": "The doctor performed (surgery) to remove the tumor.",
                "word": "surgery",
                "order": 97,
                "unitId": 9
            },
            {
                "id": 98,
                "question": "The company is known for its (innovation) in the field of technology.",
                "word": "innovation",
                "order": 98,
                "unitId": 9
            },
            {
                "id": 99,
                "question": "Meat, fish, and eggs are good sources of (protein).",
                "word": "protein",
                "order": 99,
                "unitId": 9
            },
            {
                "id": 100,
                "question": "A healthy diet is essential for good (nutrition).",
                "word": "nutrition",
                "order": 100,
                "unitId": 9
            },

                {
                    "id": 101,
                    "question": "We experienced a (disaster) during the hurricane.",
                    "word": "disaster",
                    "order": 101,
                    "unitId": 10
                },
                {
                    "id": 102,
                    "question": "There are concerns about the (emission) of greenhouse gases.",
                    "word": "emission",
                    "order": 102,
                    "unitId": 10
                },
            {
                "id": 103,
                "question": "Many species of (ape) are endangered",
                "word": "ape",
                "order": 103,
                "unitId": 10
            },
            {
                "id": 104,
                "question": "Water is composed of two hydrogen (molecule) and one oxygen (molecule).",
                "word": "molecule",
                "order": 104,
                "unitId": 10
            },
            {
                "id": 105,
                "question": "I broke out into a (sweat) after running.",
                "word": "sweat",
                "order": 105,
                "unitId": 10
            },
            {
                "id": 106,
                "question": "The doctor performed a kidney (transplant).",
                "word": "transplant",
                "order": 106,
                "unitId": 10
            },
            {
                "id": 107,
                "question": "There are many different (species) of animals on Earth.",
                "word": "species",
                "order": 107,
                "unitId": 10
            },
            {
                "id": 108,
                "question": "The (tip) of the needle is very sharp.",
                "word": "tip",
                "order": 108,
                "unitId": 10
            },
            {
                "id": 109,
                "question": "We raise (cattle) on our farm.",
                "word": "cattle",
                "order": 109,
                "unitId": 10
            },
            {
                "id": 110,
                "question": "This metal has a high (density).",
                "word": "density",
                "order": 110,
                "unitId": 10
            },
            {
                "id": 111,
                "question": "The scientist developed a new (concept) of gravity.",
                "word": "concept",
                "order": 111,
                "unitId": 11
            },
            {
                "id": 112,
                "question": "The moon cast a (pale) light on the beach.",
                "word": "pale",
                "order": 112,
                "unitId": 11
            },
            {
                "id": 113,
                "question": "Time is a (precious) commodity.",
                "word": "precious",
                "order": 113,
                "unitId": 11
            },
            {
                "id": 114,
                "question": "The dog was very (loyal) to his owner.",
                "word": "loyal",
                "order": 114,
                "unitId": 11
            },
            {
                "id": 115,
                "question": "The small village was (isolated) in the mountains.",
                "word": "isolated",
                "order": 115,
                "unitId": 11
            },
            {
                "id": 116,
                "question": "She was always (generous) to those in need.",
                "word": "generous",
                "order": 116,
                "unitId": 11
            },
            {
                "id": 117,
                "question": "We went on vacation to a (tropical) island.",
                "word": "tropical",
                "order": 117,
                "unitId": 11
            },
            {
                "id": 118,
                "question": "He was (reluctant) to go to the dentist.",
                "word": "reluctant",
                "order": 118,
                "unitId": 11
            },
            {
                "id": 119,
                "question": "The instructions were too (vague) to follow.",
                "word": "vague",
                "order": 119,
                "unitId": 11
            },
            {
                "id": 120,
                "question": "The ocean is a (vast) expanse of water.",
                "word": "vast",
                "order": 120,
                "unitId": 11
            },
            {
                "id": 121,
                "question": "There were (numerous) of tourists at the beach.",
                "word": "numerous",
                "order": 121,
                "unitId": 12
            },
            {
                "id": 122,
                "question": "I grew up in a (rural) area.",
                "word": "rural",
                "order": 122,
                "unitId": 12
            },
            {
                "id": 123,
                "question": "The rumor was (widespread) throughout the town.",
                "word": "widespread",
                "order": 123,
                "unitId": 12
            },
            {
                "id": 124,
                "question": "The tax code is very (complicated).",
                "word": "complicated",
                "order": 124,
                "unitId": 12
            },
            {
                "id": 125,
                "question": "The stars are (visible) at night.",
                "word": "visible",
                "order": 125,
                "unitId": 12
            },
            {
                "id": 126,
                "question": "I prefer to eat (raw) vegetables.",
                "word": "raw",
                "order": 126,
                "unitId": 12
            },
            {
                "id": 127,
                "question": "The village is located in a very (remote) area.",
                "word": "remote",
                "order": 127,
                "unitId": 12
            },
            {
                "id": 128,
                "question": "This is an (urgent) matter.",
                "word": "urgent",
                "order": 128,
                "unitId": 12
            },
            {
                "id": 129,
                "question": "His jokes were very (silly).",
                "word": "silly",
                "order": 129,
                "unitId": 12
            },
            {
                "id": 130,
                "question": "She had (striking) blue eyes.",
                "word": "striking",
                "order": 130,
                "unitId": 12
            },
            {
                "id": 131,
                "question": "Do you have (adequate) food for everyone?",
                "word": "adequate",
                "order": 131,
                "unitId": 13
            },
            {
                "id": 132,
                "question": "She has an (extraordinary) talent for music.",
                "word": "extraordinary",
                "order": 132,
                "unitId": 13
            },
            {
                "id": 133,
                "question": "It was an (odd) thing to say.",
                "word": "odd",
                "order": 133,
                "unitId": 13
            },
            {
                "id": 134,
                "question": "The concept of love is very (abstract).",
                "word": "abstract",
                "order": 134,
                "unitId": 13
            },
            {
                "id": 135,
                "question": "There was a (mutual) understanding between them.",
                "word": "mutual",
                "order": 135,
                "unitId": 13
            },
            {
                "id": 136,
                "question": "He ate an (excessive) amount of food.",
                "word": "excessive",
                "order": 136,
                "unitId": 13
            },
            {
                "id": 137,
                "question": "She was (ashamed) of her mistake.",
                "word": "ashamed",
                "order": 137,
                "unitId": 13
            },
            {
                "id": 138,
                "question": "The task required (tremendous) effort.",
                "word": "tremendous",
                "order": 138,
                "unitId": 13
            },
            {
                "id": 139,
                "question": "War is (inevitable) in some parts of the world.",
                "word": "inevitable",
                "order": 139,
                "unitId": 13
            },
            {
                "id": 140,
                "question": "The water in the spring is (pure).",
                "word": "pure",
                "order": 140,
                "unitId": 13
            },
            {
                "id": 141,
                "question": "The country has a (stable) government.",
                "word": "stable",
                "order": 141,
                "unitId": 14
            },
            {
                "id": 142,
                "question": "She is a very (shy) person.",
                "word": "shy",
                "order": 142,
                "unitId": 14
            },
            {
                "id": 143,
                "question": "The (solar) energy system is very sustainable.",
                "word": "solar",
                "order": 143,
                "unitId": 14
            },
            {
                "id": 144,
                "question": "He gave a (profound) speech about the meaning of life.",
                "word": "profound",
                "order": 144,
                "unitId": 14
            },
            {
                "id": 145,
                "question": "The artist used (subtle) colors in her painting.",
                "word": "subtle",
                "order": 145,
                "unitId": 14
            },
            {
                "id": 146,
                "question": "She has (conservative) political views.",
                "word": "conservative",
                "order": 146,
                "unitId": 14
            },
            {
                "id": 147,
                "question": "She was very (brave) to stand up for what she believed in.",
                "word": "brave",
                "order": 147,
                "unitId": 14
            },
            {
                "id": 148,
                "question": "She felt an (intense) emotion of love.",
                "word": "intense",
                "order": 148,
                "unitId": 14
            },
            {
                "id": 149,
                "question": "He is an (alcoholic) beverage.",
                "word": "alcoholic",
                "order": 149,
                "unitId": 14
            },
            {
                "id": 150,
                "question": "He prefers to do things (manual).",
                "word": "manual",
                "order": 150,
                "unitId": 14
            },
            {
                "id": 151,
                "question": "The children were treated (cruel) by the stepmother.",
                "word": "cruel",
                "order": 151,
                "unitId": 15
            },
            {
                "id": 152,
                "question": "He made a very (rational) decision based on the facts.",
                "word": "rational",
                "order": 152,
                "unitId": 15
            },
            {
                "id": 153,
                "question": "The (initial) cost of the project was high.",
                "word": "initial",
                "order": 153,
                "unitId": 15
            },
            {
                "id": 154,
                "question": "She is (immune) to the disease.",
                "word": "immune",
                "order": 154,
                "unitId": 15
            },
            {
                "id": 155,
                "question": "She is a (linguistic) expert.",
                "word": "linguistic",
                "order": 155,
                "unitId": 15
            },
            {
                "id": 156,
                "question": "It is (crucial) to arrive on time for the meeting.",
                "word": "crucial",
                "order": 156,
                "unitId": 15
            },
            {
                "id": 157,
                "question": "The exam was (verbal).",
                "word": "verbal",
                "order": 157,
                "unitId": 15
            },
            {
                "id": 158,
                "question": "She has a very (optimistic) outlook on life.",
                "word": "optimistic",
                "order": 158,
                "unitId": 15
            },
            {
                "id": 159,
                "question": "She is very (flexible) with her schedule.",
                "word": "flexible",
                "order": 159,
                "unitId": 15
            },
            {
                "id": 160,
                "question": "I am very (grateful) for your help.",
                "word": "grateful",
                "order": 160,
                "unitId": 15
            },
            {
                "id": 161,
                "question": "The discussion was very (lively).",
                "word": "lively",
                "order": 161,
                "unitId": 16
            },
            {
                "id": 162,
                "question": "The experience was (overwhelming).",
                "word": "overwhelming",
                "order": 162,
                "unitId": 16
            },
            {
                "id": 163,
                "question": "There are (abundant) resources in the area.",
                "word": "abundant",
                "order": 163,
                "unitId": 16
            },
            {
                "id": 164,
                "question": "He is a very (selfish) person.",
                "word": "selfish",
                "order": 164,
                "unitId": 16
            },
            {
                "id": 165,
                "question": "The house was (ugly) and in need of repair.",
                "word": "ugly",
                "order": 165,
                "unitId": 16
            },
            {
                "id": 166,
                "question": "We should avoid making (racial) remarks.",
                "word": "racial",
                "order": 166,
                "unitId": 16
            },
            {
                "id": 167,
                "question": "She is a (prominent) figure in the world of politics.",
                "word": "prominent",
                "order": 167,
                "unitId": 16
            },
            {
                "id": 168,
                "question": "The new law is a very (controversial) issue.",
                "word": "controversial",
                "order": 168,
                "unitId": 16
            },
            {
                "id": 169,
                "question": "The (federal) government is responsible for national defense.",
                "word": "federal",
                "order": 169,
                "unitId": 16
            },
            {
                "id": 170,
                "question": "His idea was (ridiculous).",
                "word": "ridiculous",
                "order": 170,
                "unitId": 16
            },
            {
                "id": 171,
                "question": "The story is set in an (imaginary) world.",
                "word": "imaginary",
                "order": 171,
                "unitId": 17
            },
            {
                "id": 172,
                "question": "The information he provided was (accurate).",
                "word": "accurate",
                "order": 172,
                "unitId": 17
            },
            {
                "id": 173,
                "question": "The flowers were (artificial).",
                "word": "artificial",
                "order": 173,
                "unitId": 17
            },
            {
                "id": 174,
                "question": "The vase is very (fragile).",
                "word": "fragile",
                "order": 174,
                "unitId": 17
            },
            {
                "id": 175,
                "question": "The stars are (visible) at night.",
                "word": "visible",
                "order": 175,
                "unitId": 17
            },
            {
                "id": 176,
                "question": "It is (vital) to eat a healthy diet.",
                "word": "vital",
                "order": 176,
                "unitId": 17
            },
            {
                "id": 177,
                "question": "We live in a very (diverse) community.",
                "word": "diverse",
                "order": 177,
                "unitId": 17
            },
            {
                "id": 178,
                "question": "The river is (polluted) with industrial waste.",
                "word": "polluted",
                "order": 178,
                "unitId": 17
            },
            {
                "id": 179,
                "question": "The intelligence is (artificial).",
                "word": "artificial",
                "order": 179,
                "unitId": 17
            },
            {
                "id": 180,
                "question": "She is (capable) of doing the job.",
                "word": "capable",
                "order": 180,
                "unitId": 17
            },
            {
                "id": 181,
                "question": "The building is a (massive) structure.",
                "word": "massive",
                "order": 181,
                "unitId": 18
            },
            {
                "id": 182,
                "question": "She prefers to eat (moderate) portions of food.",
                "word": "moderate",
                "order": 182,
                "unitId": 18
            },
            {
                "id": 183,
                "question": "He is (fluent) in several languages.",
                "word": "fluent",
                "order": 183,
                "unitId": 18
            },
            {
                "id": 184,
                "question": "She gave a very (elaborate) explanation.",
                "word": "elaborate",
                "order": 184,
                "unitId": 18
            },
            {
                "id": 185,
                "question": "It was an (incredible) experience.",
                "word": "incredible",
                "order": 185,
                "unitId": 18
            },
            {
                "id": 186,
                "question": "He proposed (radical) changes to the system.",
                "word": "radical",
                "order": 186,
                "unitId": 18
            },
            {
                "id": 187,
                "question": "The liquid has a very (acid) taste.",
                "word": "acid",
                "order": 187,
                "unitId": 18
            },
            {
                "id": 188,
                "question": "She is (deaf) and uses sign language to communicate.",
                "word": "deaf",
                "order": 188,
                "unitId": 18
            },
            {
                "id": 189,
                "question": "The castle is a (medieval) structure.",
                "word": "medieval",
                "order": 189,
                "unitId": 18
            },
            {
                "id": 190,
                "question": "The company is committed to (ecological) practices.",
                "word": "ecological",
                "order": 190,
                "unitId": 18
            },
            {
                "id": 191,
                "question": "There was a (slight) chance of rain.",
                "word": "slight",
                "order": 191,
                "unitId": 19
            },
            {
                "id": 192,
                "question": "He was (ignorant) about the situation.",
                "word": "ignorant",
                "order": 192,
                "unitId": 19
            },
            {
                "id": 193,
                "question": "The ability to think and learn is a (cognitive) function.",
                "word": "cognitive",
                "order": 193,
                "unitId": 19
            },
            {
                "id": 194,
                "question": "I (absolutely) agree with you.",
                "word": "absolutely",
                "order": 194,
                "unitId": 19
            },
            {
                "id": 195,
                "question": "The company has (virtually) no employees.",
                "word": "virtually",
                "order": 195,
                "unitId": 19
            },
            {
                "id": 196,
                "question": "I am (somewhat) interested in learning more about it.",
                "word": "somewhat",
                "order": 196,
                "unitId": 19
            },
            {
                "id": 197,
                "question": "It is not (merely) a matter of luck.",
                "word": "merely",
                "order": 197,
                "unitId": 19
            },
            {
                "id": 198,
                "question": "I was (literally) dying of laughter.",
                "word": "literally",
                "order": 198,
                "unitId": 19
            },
            {
                "id": 199,
                "question": "The task was (seemingly) easy.",
                "word": "seemingly",
                "order": 199,
                "unitId": 19
            },
            {
                "id": 200,
                "question": "(Regardless) of the weather, we will go to the park.",
                "word": "Regardless",
                "order": 200,
                "unitId": 19
            },
            {
                "id": 201,
                "question": "She cleaned the house (thoroughly).",
                "word": "thoroughly",
                "order": 201,
                "unitId": 20
            }
            ]
        )
        await db.insert(schema.answers).values([
            { "id":1 , "answer": "goals", "correct": true, "challengeId": 1, "order":1  },
            { "id":2 , "answer": "tasks", "correct": false, "challengeId": 1, "order":2  },
            { "id":3 , "answer": "aims", "correct": false, "challengeId": 1, "order":3  },
            { "id":4 , "answer": "challenges", "correct": true, "challengeId": 2, "order":4  },
            { "id":5 , "answer": "helps", "correct": false, "challengeId": 2, "order":5  },
            { "id":6 , "answer": "advantages", "correct": false, "challengeId": 2, "order":6  },
            { "id":7 , "answer": "craving", "correct": true, "challengeId": 3, "order":7  },
            { "id":8 , "answer": "dislike", "correct": false, "challengeId": 3, "order":8  },
            { "id":9 , "answer": "hatred", "correct": false, "challengeId": 3, "order":9  },
            { "id":10 , "answer": "stress", "correct": true, "challengeId": 4, "order":10  },
            { "id":11 , "answer": "relaxation", "correct": false, "challengeId": 4, "order":11  },
            { "id":12 , "answer": "calmness", "correct": false, "challengeId": 4, "order":12  },
            { "id":13 , "answer": "tribe", "correct": true, "challengeId": 5, "order":13  },
            { "id":14 , "answer": "group", "correct": false, "challengeId": 5, "order":14  },
            { "id":15 , "answer": "community", "correct": false, "challengeId": 5, "order":15  },
            { "id":16 , "answer": "financial plan", "correct": true, "challengeId": 6, "order":16  },
            { "id":17 , "answer": "plan", "correct": false, "challengeId": 6, "order":17  },
            { "id":18 , "answer": "scheme", "correct": false, "challengeId": 6, "order":18  },
            { "id":19 , "answer": "election", "correct": true, "challengeId": 7, "order":19  },
            { "id":20 , "answer": "business", "correct": false, "challengeId": 7, "order":20  },
            { "id":21 , "answer": "company", "correct": false, "challengeId": 7, "order":21  },
            { "id":22 , "answer": "sadness", "correct": true, "challengeId": 8, "order":22  },
            { "id":23 , "answer": "joy", "correct": false, "challengeId": 8, "order":23  },
            { "id":24 , "answer": "happiness", "correct": false, "challengeId": 8, "order":24  },
            { "id":25 , "answer": "artificial moons", "correct": true, "challengeId": 9, "order":25  },
            { "id":26 , "answer": "stars", "correct": false, "challengeId": 9, "order":26  },
            { "id":27 , "answer": "planets", "correct": false, "challengeId": 9, "order":27  },
            { "id":28 , "answer": "deep understanding", "correct": true, "challengeId": 10, "order":28  },
            { "id":29 , "answer": "misunderstanding", "correct": false, "challengeId": 10, "order":29  },
            { "id":30 , "answer": "confusion", "correct": false, "challengeId": 10, "order":30  },

            { "id":31 , "answer": "cold", "correct": true, "challengeId": 11, "order":31  },
            { "id":32 , "answer": "fever", "correct": false, "challengeId": 11, "order":32  },
            { "id":33 , "answer": "sneeze", "correct": false, "challengeId": 11, "order":33  },
            { "id":34 , "answer": "destiny", "correct": true, "challengeId": 12, "order":34  },
            { "id":35 , "answer": "decision", "correct": false, "challengeId": 12, "order":35  },
            { "id":36 , "answer": "choice", "correct": false, "challengeId": 12, "order":36  },
            { "id":37 , "answer": "strategy", "correct": true, "challengeId": 13, "order":37  },
            { "id":38 , "answer": "plan", "correct": false, "challengeId": 13, "order":38  },
            { "id":39 , "answer": "idea", "correct": false, "challengeId": 13, "order":39  },
            { "id":40 , "answer": "offense", "correct": true, "challengeId": 14, "order":40  },
            { "id":41 , "answer": "praise", "correct": false, "challengeId": 14, "order":41  },
            { "id":42 , "answer": "compliment", "correct": false, "challengeId": 14, "order":42  },
            { "id":43 , "answer": "residents", "correct": true, "challengeId": 15, "order":43  },
            { "id":44 , "answer": "tourists", "correct": false, "challengeId": 15, "order":44  },
            { "id":45 , "answer": "visitors", "correct": false, "challengeId": 15, "order":45  },
            { "id":46 , "answer": "remains", "correct": true, "challengeId": 16, "order":46  },
            { "id":47 , "answer": "skeletons", "correct": false, "challengeId": 16, "order":47  },
            { "id":48 , "answer": "bones", "correct": false, "challengeId": 16, "order":48  },
            { "id":49 , "answer": "motive", "correct": true, "challengeId": 17, "order":49  },
            { "id":50 , "answer": "reason", "correct": false, "challengeId": 17, "order":50  },
            { "id":51 , "answer": "excuse", "correct": false, "challengeId": 17, "order":51  },
            { "id":52 , "answer": "instinct", "correct": true, "challengeId": 18, "order":52  },
            { "id":53 , "answer": "intuition", "correct": false, "challengeId": 18, "order":53  },
            { "id":54 , "answer": "knowledge", "correct": false, "challengeId": 18, "order":54  },
            { "id":55 , "answer": "legend", "correct": true, "challengeId": 19, "order":55  },
            { "id":56 , "answer": "myth", "correct": false, "challengeId": 19, "order":56  },
            { "id":57 , "answer": "story", "correct": false, "challengeId": 19, "order":57  },
            { "id":58 , "answer": "empire", "correct": true, "challengeId": 20, "order":58  },
            { "id":59 , "answer": "nation", "correct": false, "challengeId": 20, "order":59  },
            { "id":60 , "answer": "kingdom", "correct": false, "challengeId": 20, "order":60  },


            { "id":61 , "answer": "neighborhood", "correct": true, "challengeId": 21, "order":61  },
            { "id":62 , "answer": "downtown", "correct": false, "challengeId": 21, "order":62  },
            { "id":63 , "answer": "city center", "correct": false, "challengeId": 21, "order":63  },
            { "id":64 , "answer": "structure", "correct": true, "challengeId": 22, "order":64  },
            { "id":65 , "answer": "design", "correct": false, "challengeId": 22, "order":65  },
            { "id":66 , "answer": "style", "correct": false, "challengeId": 22, "order":66  },
            { "id":67 , "answer": "interest", "correct": true, "challengeId": 23, "order":67  },
            { "id":68 , "answer": "dislike", "correct": false, "challengeId": 23, "order":68  },
            { "id":69 , "answer": "hatred", "correct": false, "challengeId": 23, "order":69  },
            { "id":70 , "answer": "disease", "correct": true, "challengeId": 24, "order":70  },
            { "id":71 , "answer": "illness", "correct": false, "challengeId": 24, "order":71  },
            { "id":72 , "answer": "injury", "correct": false, "challengeId": 24, "order":72  },
            { "id":73 , "answer": "reasonable", "correct": true, "challengeId": 25, "order":73  },
            { "id":74 , "answer": "emotional", "correct": false, "challengeId": 25, "order":74  },
            { "id":75 , "answer": "confusing", "correct": false, "challengeId": 25, "order":75  },
            { "id":76 , "answer": "dozen", "correct": true, "challengeId": 26, "order":76  },
            { "id":77 , "answer": "few", "correct": false, "challengeId": 26, "order":77  },
            { "id":78 , "answer": "hundred", "correct": false, "challengeId": 26, "order":78  },
            { "id":79 , "answer": "crop", "correct": true, "challengeId": 27, "order":79  },
            { "id":80 , "answer": "planting", "correct": false, "challengeId": 27, "order":80  },
            { "id":81 , "answer": "growing", "correct": false, "challengeId": 27, "order":81  },
            { "id":82 , "answer": "ingredients", "correct": true, "challengeId": 28, "order":82  },
            { "id":83 , "answer": "tools", "correct": false, "challengeId": 28, "order":83  },
            { "id":84 , "answer": "instructions", "correct": false, "challengeId": 28, "order":84  },
            { "id":85 , "answer": "theory", "correct": true, "challengeId": 29, "order":85  },
            { "id":86 , "answer": "fact", "correct": false, "challengeId": 29, "order":86  },
            { "id":87 , "answer": "proof", "correct": false, "challengeId": 29, "order":87  },
            { "id":88 , "answer": "journey", "correct": true, "challengeId": 30, "order":88  },
            { "id":89 , "answer": "trip", "correct": false, "challengeId": 30, "order":89  },
            { "id":90 , "answer": "walk", "correct": false, "challengeId": 30, "order":90  },


            { "id":91 , "answer": "publisher", "correct": false, "challengeId": 31, "order":91  },
            { "id":92 , "answer": "writer", "correct": true, "challengeId": 31, "order":92  },
            { "id":93 , "answer": "author", "correct": false, "challengeId": 31, "order":93  },
            { "id":94 , "answer": "choices", "correct": true, "challengeId": 32, "order":94  },
            { "id":95 , "answer": "restrictions", "correct": false, "challengeId": 32, "order":95  },
            { "id":96 , "answer": "limitations", "correct": false, "challengeId": 32, "order":96  },
            { "id":97 , "answer": "parts", "correct": true, "challengeId": 33, "order":97  },
            { "id":98 , "answer": "regions", "correct": false, "challengeId": 33, "order":98  },
            { "id":99 , "answer": "sides", "correct": false, "challengeId": 33, "order":99  },
            { "id":100 , "answer": "function", "correct": true, "challengeId": 34, "order":100  },
            { "id":101 , "answer": "purpose", "correct": false, "challengeId": 34, "order":101  },
            { "id":102 , "answer": "reason", "correct": false, "challengeId": 34, "order":102  },
            { "id":103 , "answer": "anthropologist", "correct": true, "challengeId": 35, "order":103  },
            { "id":104 , "answer": "historian", "correct": false, "challengeId": 35, "order":104  },
            { "id":105 , "answer": "sociologist", "correct": false, "challengeId": 35, "order":105  },
            { "id":106 , "answer": "tragedy", "correct": true, "challengeId": 36, "order":106  },
            { "id":107 , "answer": "comedy", "correct": false, "challengeId": 36, "order":107  },
            { "id":108 , "answer": "happiness", "correct": false, "challengeId": 36, "order":108  },
            { "id":109 , "answer": "antibiotic", "correct": true, "challengeId": 37, "order":109  },
            { "id":110 , "answer": "pain reliever", "correct": false, "challengeId": 37, "order":110  },
            { "id":111 , "answer": "vitamin", "correct": false, "challengeId": 37, "order":111  },
            { "id":112 , "answer": "fare", "correct": true, "challengeId": 38, "order":112  },
            { "id":113 , "answer": "price", "correct": false, "challengeId": 38, "order":113  },
            { "id":114 , "answer": "value", "correct": false, "challengeId": 38, "order":114  },
            { "id":115 , "answer": "debt", "correct": true, "challengeId": 39, "order":115  },
            { "id":116 , "answer": "savings", "correct": false, "challengeId": 39, "order":116  },
            { "id":117 , "answer": "income", "correct": false, "challengeId": 39, "order":117  },
            { "id":118 , "answer": "classes", "correct": true, "challengeId": 40, "order":118  },
            { "id":119 , "answer": "subjects", "correct": false, "challengeId": 40, "order":119  },
            { "id":120 , "answer": "activities", "correct": false, "challengeId": 40, "order":120  },





            { "id":121 , "answer": "parts", "correct": true, "challengeId": 41, "order":121  },
            { "id":122 , "answer": "pieces", "correct": false, "challengeId": 41, "order":122  },
            { "id":123 , "answer": "tools", "correct": false, "challengeId": 41, "order":123  },
            { "id":124 , "answer": "wheat", "correct": true, "challengeId": 42, "order":124  },
            { "id":125 , "answer": "rice", "correct": false, "challengeId": 42, "order":125  },
            { "id":126 , "answer": "corn", "correct": false, "challengeId": 42, "order":126  },
            { "id":127 , "answer": "usage", "correct": true, "challengeId": 43, "order":127  },
            { "id":128 , "answer": "meaning", "correct": false, "challengeId": 43, "order":128  },
            { "id":129 , "answer": "definition", "correct": false, "challengeId": 43, "order":129  },
            { "id":130 , "answer": "palace", "correct": true, "challengeId": 44, "order":130  },
            { "id":131 , "answer": "house", "correct": false, "challengeId": 44, "order":131  },
            { "id":132 , "answer": "apartment", "correct": false, "challengeId": 44, "order":132  },
            { "id":133 , "answer": "famine", "correct": true, "challengeId": 45, "order":133  },
            { "id":134 , "answer": "drought", "correct": false, "challengeId": 45, "order":134  },
            { "id":135 , "answer": "flood", "correct": false, "challengeId": 45, "order":135  },
            { "id":136 , "answer": "extinction", "correct": true, "challengeId": 46, "order":136  },
            { "id":137 , "answer": "evolution", "correct": false, "challengeId": 46, "order":137  },
            { "id":138 , "answer": "adaptation", "correct": false, "challengeId": 46, "order":138  },
            { "id":139 , "answer": "purse", "correct": true, "challengeId": 47, "order":139  },
            { "id":140 , "answer": "bag", "correct": false, "challengeId": 47, "order":140  },
            { "id":141 , "answer": "backpack", "correct": false, "challengeId": 47, "order":141  },
            { "id":142 , "answer": "folk", "correct": true, "challengeId": 48, "order":142  },
            { "id":143 , "answer": "people", "correct": false, "challengeId": 48, "order":143  },
            { "id":144 , "answer": "group", "correct": false, "challengeId": 48, "order":144  },
            { "id":145 , "answer": "explosion", "correct": true, "challengeId": 49, "order":145  },
            { "id":146 , "answer": "fire", "correct": false, "challengeId": 49, "order":146  },
            { "id":147 , "answer": "accident", "correct": false, "challengeId": 49, "order":147  },
            { "id":148 , "answer": "portion", "correct": true, "challengeId": 50, "order":148  },
            { "id":149 , "answer": "slice", "correct": false, "challengeId": 50, "order":149  },
            { "id":150 , "answer": "piece", "correct": false, "challengeId": 50, "order":150  },


            { "id":151 , "answer": "animals", "correct": true, "challengeId": 51, "order":151  },
            { "id":152 , "answer": "plants", "correct": false, "challengeId": 51, "order":152  },
            { "id":153 , "answer": "things", "correct": false, "challengeId": 51, "order":153  },
            { "id":154 , "answer": "merchant", "correct": true, "challengeId": 52, "order":154  },
            { "id":155 , "answer": "farmer", "correct": false, "challengeId": 52, "order":155  },
            { "id":156 , "answer": "trader", "correct": false, "challengeId": 52, "order":156  },
            { "id":157 , "answer": "myth", "correct": true, "challengeId": 53, "order":157  },
            { "id":158 , "answer": "story", "correct": false, "challengeId": 53, "order":158  },
            { "id":159 , "answer": "legend", "correct": false, "challengeId": 53, "order":159  },
            { "id":160 , "answer": "incident", "correct": true, "challengeId": 54, "order":160  },
            { "id":161 , "answer": "rule", "correct": false, "challengeId": 54, "order":161  },
            { "id":162 , "answer": "law", "correct": false, "challengeId": 54, "order":162  },
            { "id":163 , "answer": "wildlife", "correct": true, "challengeId": 55, "order":163  },
            { "id":164 , "answer": "pets", "correct": false, "challengeId": 55, "order":164  },
            { "id":165 , "answer": "animals", "correct": false, "challengeId": 55, "order":165  },
            { "id":166 , "answer": "congress", "correct": true, "challengeId": 56, "order":166  },
            { "id":167 , "answer": "government", "correct": false, "challengeId": 56, "order":167  },
            { "id":168 , "answer": "court", "correct": false, "challengeId": 56, "order":168  },
            { "id":169 , "answer": "bay", "correct": true, "challengeId": 57, "order":169  },
            { "id":170 , "answer": "river", "correct": false, "challengeId": 57, "order":170  },
            { "id":171 , "answer": "lake", "correct": false, "challengeId": 57, "order":171  },
            { "id":172 , "answer": "penalty", "correct": true, "challengeId": 58, "order":172  },
            { "id":173 , "answer": "reward", "correct": false, "challengeId": 58, "order":173  },
            { "id":174 , "answer": "gift", "correct": false, "challengeId": 58, "order":174  },
            { "id":175 , "answer": "heritage", "correct": true, "challengeId": 59, "order":175  },
            { "id":176 , "answer": "property", "correct": false, "challengeId": 59, "order":176  },
            { "id":177 , "answer": "treasure", "correct": false, "challengeId": 59, "order":177  },
            { "id":178 , "answer": "diversity", "correct": true, "challengeId": 60, "order":178  },
            { "id":179 , "answer": "similarity", "correct": false, "challengeId": 60, "order":179  },
            { "id":180 , "answer": "number", "correct": false, "challengeId": 60, "order":180  },


            { "id":181 , "answer": "finger", "correct": true, "challengeId": 61, "order":181  },
            { "id":182 , "answer": "toe", "correct": false, "challengeId": 61, "order":182  },
            { "id":183 , "answer": "hand", "correct": false, "challengeId": 61, "order":183  },
            { "id":184 , "answer": "geography", "correct": true, "challengeId": 62, "order":184  },
            { "id":185 , "answer": "history", "correct": false, "challengeId": 62, "order":185  },
            { "id":186 , "answer": "science", "correct": false, "challengeId": 62, "order":186  },
            { "id":187 , "answer": "factor", "correct": true, "challengeId": 63, "order":187  },
            { "id":188 , "answer": "results", "correct": false, "challengeId": 63, "order":188  },
            { "id":189 , "answer": "effects", "correct": false, "challengeId": 63, "order":189  },
            { "id":190 , "answer": "discrimination", "correct": true, "challengeId": 64, "order":190  },
            { "id":191 , "answer": "Acceptance", "correct": false, "challengeId": 64, "order":191  },
            { "id":192 , "answer": "Equality", "correct": false, "challengeId": 64, "order":192  },
            { "id":193 , "answer": "virus", "correct": true, "challengeId": 65, "order":193  },
            { "id":194 , "answer": "bacteria", "correct": false, "challengeId": 65, "order":194  },
            { "id":195 , "answer": "disease", "correct": false, "challengeId": 65, "order":195  },
            { "id":196 , "answer": "statue", "correct": true, "challengeId": 66, "order":196  },
            { "id":197 , "answer": "building", "correct": false, "challengeId": 66, "order":197  },
            { "id":198 , "answer": "monument", "correct": false, "challengeId": 66, "order":198  },
            { "id":199 , "answer": "priest", "correct": true, "challengeId": 67, "order":199  },
            { "id":200 , "answer": "doctor", "correct": false, "challengeId": 67, "order":200  },
            { "id":201 , "answer": "teacher", "correct": false, "challengeId": 67, "order":201  },
            { "id":202 , "answer": "pioneer", "correct": true, "challengeId": 68, "order":202  },
            { "id":203 , "answer": "follower", "correct": false, "challengeId": 68, "order":203  },
            { "id":204 , "answer": "leader", "correct": false, "challengeId": 68, "order":204  },
            { "id":205 , "answer": "trait", "correct": true, "challengeId": 69, "order":205  },
            { "id":206 , "answer": "skills", "correct": false, "challengeId": 69, "order":206  },
            { "id":207 , "answer": "abilities", "correct": false, "challengeId": 69, "order":207  },
            { "id":208 , "answer": "bond", "correct": true, "challengeId": 70, "order":208  },
            { "id":209 , "answer": "distance", "correct": false, "challengeId": 70, "order":209  },
            { "id":210 , "answer": "separation", "correct": false, "challengeId": 70, "order":210  },


            { "id":211 , "answer": "food", "correct": true, "challengeId": 71, "order":211  },
            { "id":212 , "answer": "clothes", "correct": false, "challengeId": 71, "order":212  },
            { "id":213 , "answer": "furniture", "correct": false, "challengeId": 71, "order":213  },
            { "id":214 , "answer": "secretary", "correct": true, "challengeId": 72, "order":214  },
            { "id":215 , "answer": "assistant", "correct": false, "challengeId": 72, "order":215  },
            { "id":216 , "answer": "manager", "correct": false, "challengeId": 72, "order":216  },
            { "id":217 , "answer": "dialect", "correct": true, "challengeId": 73, "order":217  },
            { "id":218 , "answer": "languages", "correct": false, "challengeId": 73, "order":218  },
            { "id":219 , "answer": "accents", "correct": false, "challengeId": 73, "order":219  },
            { "id":220 , "answer": "astronomy", "correct": true, "challengeId": 74, "order":220  },
            { "id":221 , "answer": "biology", "correct": false, "challengeId": 74, "order":221  },
            { "id":222 , "answer": "chemistry", "correct": false, "challengeId": 74, "order":222  },
            { "id":223 , "answer": "youngster", "correct": true, "challengeId": 75, "order":223  },
            { "id":224 , "answer": "adults", "correct": false, "challengeId": 75, "order":224  },
            { "id":225 , "answer": "parents", "correct": false, "challengeId": 75, "order":225  },
            { "id":226 , "answer": "substance", "correct": true, "challengeId": 76, "order":226  },
            { "id":227 , "answer": "ideas", "correct": false, "challengeId": 76, "order":227  },
            { "id":228 , "answer": "energy", "correct": false, "challengeId": 76, "order":228  },
            { "id":229 , "answer": "finding", "correct": true, "challengeId": 77, "order":229  },
            { "id":230 , "answer": "theory", "correct": false, "challengeId": 77, "order":230  },
            { "id":231 , "answer": "mistake", "correct": false, "challengeId": 77, "order":231  },
            { "id":232 , "answer": "strategy", "correct": true, "challengeId": 78, "order":232  },
            { "id":233 , "answer": "product", "correct": false, "challengeId": 78, "order":233  },
            { "id":234 , "answer": "service", "correct": false, "challengeId": 78, "order":234  },
            { "id":235 , "answer": "lung", "correct": true, "challengeId": 79, "order":235  },
            { "id":236 , "answer": "heart", "correct": false, "challengeId": 79, "order":236  },
            { "id":237 , "answer": "brain", "correct": false, "challengeId": 79, "order":237  },
            { "id":238 , "answer": "opponent", "correct": true, "challengeId": 80, "order":238  },
            { "id":239 , "answer": "teammate", "correct": false, "challengeId": 80, "order":239  },
            { "id":240 , "answer": "friend", "correct": false, "challengeId": 80, "order":240  },


            { "id":241 , "answer": "tradition", "correct": false, "challengeId": 81, "order":241  },
            { "id":242 , "answer": "custom", "correct": false, "challengeId": 81, "order":242  },
            { "id":243 , "answer": "party", "correct": false, "challengeId": 81, "order":243  },
            { "id":244 , "answer": "result", "correct": true, "challengeId": 82, "order":244  },
            { "id":245 , "answer": "reason", "correct": false, "challengeId": 82, "order":245  },
            { "id":246 , "answer": "cause", "correct": false, "challengeId": 82, "order":246  },
            { "id":247 , "answer": "preservation", "correct": true, "challengeId": 83, "order":247  },
            { "id":248 , "answer": "pollution", "correct": false, "challengeId": 83, "order":248  },
            { "id":249 , "answer": "destruction", "correct": false, "challengeId": 83, "order":249  },
            { "id":250 , "answer": "mammal", "correct": true, "challengeId": 84, "order":250  },
            { "id":251 , "answer": "birds", "correct": false, "challengeId": 84, "order":251  },
            { "id":252 , "answer": "reptiles", "correct": false, "challengeId": 84, "order":252  },
            { "id":253 , "answer": "telescope", "correct": true, "challengeId": 85, "order":253  },
            { "id":254 , "answer": "microscope", "correct": false, "challengeId": 85, "order":254  },
            { "id":255 , "answer": "camera", "correct": false, "challengeId": 85, "order":255  },
            { "id":256 , "answer": "refugee", "correct": true, "challengeId": 86, "order":256  },
            { "id":257 , "answer": "citizens", "correct": false, "challengeId": 86, "order":257  },
            { "id":258 , "answer": "tourists", "correct": false, "challengeId": 86, "order":258  },
            { "id":259 , "answer": "instructions", "correct": true, "challengeId": 87, "order":259  },
            { "id":260 , "answer": "options", "correct": false, "challengeId": 87, "order":260  },
            { "id":261 , "answer": "choices", "correct": false, "challengeId": 87, "order":261  },
            { "id":262 , "answer": "taste", "correct": true, "challengeId": 88, "order":262  },
            { "id":263 , "answer": "color", "correct": false, "challengeId": 88, "order":263  },
            { "id":264 , "answer": "shape", "correct": false, "challengeId": 88, "order":264  },
            { "id":265 , "answer": "atoms", "correct": true, "challengeId": 89, "order":265  },
            { "id":266 , "answer": "pieces", "correct": false, "challengeId": 89, "order":266  },
            { "id":267 , "answer": "objects", "correct": false, "challengeId": 89, "order":267  },
            { "id":268 , "answer": "nurse", "correct": true, "challengeId": 90, "order":268  },
            { "id":269 , "answer": "doctor", "correct": false, "challengeId": 90, "order":269  },
            { "id":270 , "answer": "teacher", "correct": false, "challengeId": 90, "order":270  },


            { "id":271 , "answer": "finger", "correct": true, "challengeId": 91, "order":271  },
            { "id":272 , "answer": "toe", "correct": false, "challengeId": 91, "order":272  },
            { "id":273 , "answer": "hand", "correct": false, "challengeId": 91, "order":273  },
            { "id":274 , "answer": "geography", "correct": true, "challengeId": 92, "order":274  },
            { "id":275 , "answer": "science", "correct": false, "challengeId": 92, "order":275  },
            { "id":276 , "answer": "math", "correct": false, "challengeId": 92, "order":276  },
            { "id":277 , "answer": "reasons", "correct": true, "challengeId": 93, "order":277  },
            { "id":278 , "answer": "results", "correct": false, "challengeId": 93, "order":278  },
            { "id":279 , "answer": "effects", "correct": false, "challengeId": 93, "order":279  },
            { "id":280 , "answer": "harassment", "correct": false, "challengeId": 94, "order":280  },
            { "id":281 , "answer": "kindness", "correct": false, "challengeId": 94, "order":281  },
            { "id":282 , "answer": "respect", "correct": false, "challengeId": 94, "order":282  },
            { "id":283 , "answer": "reptiles", "correct": true, "challengeId": 95, "order":283  },
            { "id":284 , "answer": "mammals", "correct": false, "challengeId": 95, "order":284  },
            { "id":285 , "answer": "insects", "correct": false, "challengeId": 95, "order":285  },
            { "id":286 , "answer": "government", "correct": true, "challengeId": 96, "order":286  },
            { "id":287 , "answer": "court", "correct": false, "challengeId": 96, "order":287  },
            { "id":288 , "answer": "army", "correct": false, "challengeId": 96, "order":288  },
            { "id":289 , "answer": "gender", "correct": true, "challengeId": 97, "order":289  },
            { "id":290 , "answer": "age", "correct": false, "challengeId": 97, "order":290  },
            { "id":291 , "answer": "race", "correct": false, "challengeId": 97, "order":291  },
            { "id":292 , "answer": "operation", "correct": true, "challengeId": 98, "order":292  },
            { "id":293 , "answer": "medicine", "correct": false, "challengeId": 98, "order":293  },
            { "id":294 , "answer": "treatment", "correct": false, "challengeId": 98, "order":294  },
            { "id":295 , "answer": "innovation", "correct": true, "challengeId": 99, "order":295  },
            { "id":296 , "answer": "tradition", "correct": false, "challengeId": 99, "order":296  },
            { "id":297 , "answer": "history", "correct": false, "challengeId": 99, "order":297  },
            { "id":298 , "answer": "protein", "correct": true, "challengeId": 100, "order":298  },
            { "id":299 , "answer": "vitamins", "correct": false, "challengeId": 100, "order":299  },
            { "id":300 , "answer": "minerals", "correct": false, "challengeId": 100, "order":300  },



            { "id":301 , "answer": "problem", "correct": false, "challengeId": 101, "order":301  },
            { "id":302 , "answer": "catastrophe", "correct": true, "challengeId": 101, "order":302  },
            { "id":303 , "answer": "difficulty", "correct": false, "challengeId": 101, "order":303  },
            { "id":304 , "answer": "release", "correct": true, "challengeId": 102, "order":304  },
            { "id":305 , "answer": "production", "correct": false, "challengeId": 102, "order":305  },
            { "id":306 , "answer": "storage", "correct": false, "challengeId": 102, "order":306  },
            { "id":307 , "answer": "monkey", "correct": true, "challengeId": 103, "order":307  },
            { "id":308 , "answer": "gorilla", "correct": false, "challengeId": 103, "order":308  },
            { "id":309 , "answer": "bird", "correct": false, "challengeId": 103, "order":309  },
            { "id":310 , "answer": "atom", "correct": true, "challengeId": 104, "order":310  },
            { "id":311 , "answer": "compound", "correct": false, "challengeId": 104, "order":311  },
            { "id":312 , "answer": "element", "correct": false, "challengeId": 104, "order":312  },
            { "id":313 , "answer": "tear", "correct": false, "challengeId": 105, "order":313  },
            { "id":314 , "answer": "perspiration", "correct": true, "challengeId": 105, "order":314  },
            { "id":315 , "answer": "rain", "correct": false, "challengeId": 105, "order":315  },
            { "id":316 , "answer": "move", "correct": false, "challengeId": 106, "order":316  },
            { "id":317 , "answer": "replace", "correct": false, "challengeId": 106, "order":317  },
            { "id":318 , "answer": "carry", "correct": true, "challengeId": 106, "order":318  },
            { "id":319 , "answer": "group", "correct": false, "challengeId": 107, "order":319  },
            { "id":320 , "answer": "kind", "correct": true, "challengeId": 107, "order":320  },
            { "id":321 , "answer": "individual", "correct": false, "challengeId": 107, "order":321  },
            { "id":322 , "answer": "middle", "correct": false, "challengeId": 108, "order":322  },
            { "id":323 , "answer": "end", "correct": true, "challengeId": 108, "order":323  },
            { "id":324 , "answer": "top", "correct": false, "challengeId": 108, "order":324  },
            { "id":325 , "answer": "pig", "correct": false, "challengeId": 109, "order":325  },
            { "id":326 , "answer": "cow", "correct": true, "challengeId": 109, "order":326  },
            { "id":327 , "answer": "sheep", "correct": false, "challengeId": 109, "order":327  },
            { "id":328 , "answer": "weight", "correct": false, "challengeId": 110, "order":328  },
            { "id":329 , "answer": "thickness", "correct": true, "challengeId": 110, "order":329  },
            { "id":330 , "answer": "space", "correct": false, "challengeId": 110, "order":330  },
            { "id":331 , "answer": "idea", "correct": false, "challengeId": 111, "order":331  },
            { "id":332 , "answer": "theory", "correct": true, "challengeId": 111, "order":332  },
            { "id":333 , "answer": "explanation", "correct": false, "challengeId": 111, "order":333  },
            { "id":334 , "answer": "dark", "correct": false, "challengeId": 112, "order":334  },
            { "id":335 , "answer": "bright", "correct": false, "challengeId": 112, "order":335  },
            { "id":336 , "answer": "whitish", "correct": true, "challengeId": 112, "order":336  },
            { "id":337 , "answer": "common", "correct": false, "challengeId": 113, "order":337  },
            { "id":338 , "answer": "valuable", "correct": true, "challengeId": 113, "order":338  },
            { "id":339 , "answer": "abundant", "correct": false, "challengeId": 113, "order":339  },
            { "id":340 , "answer": "disobedient", "correct": false, "challengeId": 114, "order":340  },
            { "id":341 , "answer": "faithful", "correct": true, "challengeId": 114, "order":341  },
            { "id":342 , "answer": "unfriendly", "correct": false, "challengeId": 114, "order":342  },
            { "id":343 , "answer": "connected", "correct": false, "challengeId": 115, "order":343  },
            { "id":344 , "answer": "remote", "correct": true, "challengeId": 115, "order":344  },
            { "id":345 , "answer": "central", "correct": false, "challengeId": 115, "order":345  },
            { "id":346 , "answer": "selfish", "correct": false, "challengeId": 116, "order":346  },
            { "id":347 , "answer": "kind", "correct": true, "challengeId": 116, "order":347  },
            { "id":348 , "answer": "stingy", "correct": false, "challengeId": 116, "order":348  },
            { "id":349 , "answer": "arctic", "correct": false, "challengeId": 117, "order":349  },
            { "id":350 , "answer": "desert", "correct": false, "challengeId": 117, "order":350  },
            { "id":351 , "answer": "equatorial", "correct": true, "challengeId": 117, "order":351  },
            { "id":352 , "answer": "eager", "correct": false, "challengeId": 118, "order":352  },
            { "id":353 , "answer": "hesitant", "correct": true, "challengeId": 118, "order":353  },
            { "id":354 , "answer": "enthusiastic", "correct": false, "challengeId": 118, "order":354  },
            { "id":355 , "answer": "clear", "correct": false, "challengeId": 119, "order":355  },
            { "id":356 , "answer": "specific", "correct": false, "challengeId": 119, "order":356  },
            { "id":357 , "answer": "uncertain", "correct": true, "challengeId": 119, "order":357  },
            { "id":358 , "answer": "small", "correct": false, "challengeId": 120, "order":358  },
            { "id":359 , "answer": "limited", "correct": false, "challengeId": 120, "order":359  },
            { "id":360 , "answer": "enormous", "correct": true, "challengeId": 120, "order":360  },
            { "id":361 , "answer": "few", "correct": false, "challengeId": 121, "order":361  },
            { "id":362 , "answer": "many", "correct": true, "challengeId": 121, "order":362  },
            { "id":363 , "answer": "none", "correct": false, "challengeId": 121, "order":363  },
            { "id":364 , "answer": "urban", "correct": false, "challengeId": 122, "order":364  },
            { "id":365 , "answer": "city", "correct": false, "challengeId": 122, "order":365  },
            { "id":366 , "answer": "countryside", "correct": true, "challengeId": 122, "order":366  },
            { "id":367 , "answer": "limited", "correct": false, "challengeId": 123, "order":367  },
            { "id":368 , "answer": "confined", "correct": false, "challengeId": 123, "order":368  },
            { "id":369 , "answer": "extensive", "correct": true, "challengeId": 123, "order":369  },
            { "id":370 , "answer": "simple", "correct": false, "challengeId": 124, "order":370  },
            { "id":371 , "answer": "easy", "correct": false, "challengeId": 124, "order":371  },
            { "id":372 , "answer": "difficult", "correct": true, "challengeId": 124, "order":372  },
            { "id":373 , "answer": "invisible", "correct": false, "challengeId": 125, "order":373  },
            { "id":374 , "answer": "hidden", "correct": false, "challengeId": 125, "order":374  },
            { "id":375 , "answer": "apparent", "correct": true, "challengeId": 125, "order":375  },
            { "id":376 , "answer": "uncooked", "correct": true, "challengeId": 126, "order":376  },
            { "id":377 , "answer": "prepared", "correct": false, "challengeId": 126, "order":377  },
            { "id":378 , "answer": "processed", "correct": false, "challengeId": 126, "order":378  },
            { "id":379 , "answer": "central", "correct": false, "challengeId": 127, "order":379  },
            { "id":380 , "answer": "accessible", "correct": false, "challengeId": 127, "order":380  },
            { "id":381 , "answer": "isolated", "correct": true, "challengeId": 127, "order":381  },
            { "id":382 , "answer": "minor", "correct": false, "challengeId": 128, "order":382  },
            { "id":383 , "answer": "unimportant", "correct": false, "challengeId": 128, "order":383  },
            { "id":384 , "answer": "pressing", "correct": true, "challengeId": 128, "order":384  },
            { "id":385 , "answer": "funny", "correct": true, "challengeId": 129, "order":385  },
            { "id":386 , "answer": "intelligent", "correct": false, "challengeId": 129, "order":386  },
            { "id":387 , "answer": "ridiculous", "correct": false, "challengeId": 129, "order":387  },
            { "id":388 , "answer": "ordinary", "correct": false, "challengeId": 130, "order":388  },
            { "id":389 , "answer": "unnoticeable", "correct": false, "challengeId": 130, "order":389  },
            { "id":390 , "answer": "remarkable", "correct": true, "challengeId": 130, "order":390  },
            { "id":391 , "answer": "insufficient", "correct": false, "challengeId": 131, "order":391  },
            { "id":392 , "answer": "too much", "correct": false, "challengeId": 131, "order":392  },
            { "id":393 , "answer": "enough", "correct": true, "challengeId": 131, "order":393  },


            { "id":394 , "answer": "average", "correct": false, "challengeId": 132, "order":394  },
            { "id":395 , "answer": "ordinary", "correct": false, "challengeId": 132, "order":395  },
            { "id":396 , "answer": "exceptional", "correct": true, "challengeId": 132, "order":396  },
            { "id":397 , "answer": "normal", "correct": false, "challengeId": 133, "order":397  },
            { "id":398 , "answer": "usual", "correct": false, "challengeId": 133, "order":398  },
            { "id":399 , "answer": "strange", "correct": true, "challengeId": 133, "order":399  },
            { "id":400 , "answer": "concrete", "correct": false, "challengeId": 134, "order":400  },
            { "id":401 , "answer": "literal", "correct": false, "challengeId": 134, "order":401  },
            { "id":402 , "answer": "theoretical", "correct": true, "challengeId": 134, "order":402  },
            { "id":403 , "answer": "one-sided", "correct": false, "challengeId": 135, "order":403  },
            { "id":404 , "answer": "unilateral", "correct": false, "challengeId": 135, "order":404  },
            { "id":405 , "answer": "shared", "correct": true, "challengeId": 135, "order":405  },
            { "id":406 , "answer": "insufficient", "correct": false, "challengeId": 136, "order":406  },
            { "id":407 , "answer": "moderate", "correct": false, "challengeId": 136, "order":407  },
            { "id":408 , "answer": "unnecessary", "correct": true, "challengeId": 136, "order":408  },
            { "id":409 , "answer": "proud", "correct": false, "challengeId": 137, "order":409  },
            { "id":410 , "answer": "happy", "correct": false, "challengeId": 137, "order":410  },
            { "id":411 , "answer": "embarrassed", "correct": true, "challengeId": 137, "order":411  },
            { "id":412 , "answer": "little", "correct": false, "challengeId": 138, "order":412  },
            { "id":413 , "answer": "minimal", "correct": false, "challengeId": 138, "order":413  },
            { "id":414 , "answer": "great", "correct": true, "challengeId": 138, "order":414  },
            { "id":415 , "answer": "preventable", "correct": false, "challengeId": 139, "order":415  },
            { "id":416 , "answer": "avoidable", "correct": false, "challengeId": 139, "order":416  },
            { "id":417 , "answer": "unavoidable", "correct": true, "challengeId": 139, "order":417  },
            { "id":418 , "answer": "dirty", "correct": false, "challengeId": 140, "order":418  },
            { "id":419 , "answer": "polluted", "correct": false, "challengeId": 140, "order":419  },
            { "id":420 , "answer": "clean", "correct": true, "challengeId": 140, "order":420  },
            { "id":421 , "answer": "unstable", "correct": false, "challengeId": 141, "order":421  },
            { "id":422 , "answer": "uncertain", "correct": false, "challengeId": 141, "order":422  },
            { "id":423 , "answer": "secure", "correct": true, "challengeId": 141, "order":423  },

            { "id":424 , "answer": "outgoing", "correct": false, "challengeId": 142, "order":424  },
            { "id":425 , "answer": "extroverted", "correct": false, "challengeId": 142, "order":425  },
            { "id":426 , "answer": "timid", "correct": true, "challengeId": 142, "order":426  },
            { "id":427 , "answer": "wind", "correct": false, "challengeId": 143, "order":427  },
            { "id":428 , "answer": "water", "correct": false, "challengeId": 143, "order":428  },
            { "id":429 , "answer": "power", "correct": true, "challengeId": 143, "order":429  },
            { "id":430 , "answer": "shallow", "correct": false, "challengeId": 144, "order":430  },
            { "id":431 , "answer": "superficial", "correct": false, "challengeId": 144, "order":431  },
            { "id":432 , "answer": "thoughtful", "correct": true, "challengeId": 144, "order":432  },
            { "id":433 , "answer": "bold", "correct": false, "challengeId": 145, "order":433  },
            { "id":434 , "answer": "bright", "correct": false, "challengeId": 145, "order":434  },
            { "id":435 , "answer": "delicate", "correct": true, "challengeId": 145, "order":435  },
            { "id":436 , "answer": "liberal", "correct": false, "challengeId": 146, "order":436  },
            { "id":437 , "answer": "progressive", "correct": false, "challengeId": 146, "order":437  },
            { "id":438 , "answer": "traditional", "correct": true, "challengeId": 146, "order":438  },
            { "id":439 , "answer": "cowardly", "correct": false, "challengeId": 147, "order":439  },
            { "id":440 , "answer": "scared", "correct": false, "challengeId": 147, "order":440  },
            { "id":441 , "answer": "courageous", "correct": true, "challengeId": 147, "order":441  },
            { "id":442 , "answer": "weak", "correct": false, "challengeId": 148, "order":442  },
            { "id":443 , "answer": "mild", "correct": false, "challengeId": 148, "order":443  },
            { "id":444 , "answer": "powerful", "correct": true, "challengeId": 148, "order":444  },
            { "id":445 , "answer": "healthy", "correct": false, "challengeId": 149, "order":445  },
            { "id":446 , "answer": "non-alcoholic", "correct": true, "challengeId": 149, "order":446  },
            { "id":447 , "answer": "addicted to", "correct": false, "challengeId": 149, "order":447  },
            { "id":448 , "answer": "automatically", "correct": false, "challengeId": 150, "order":448  },
            { "id":449 , "answer": "electronically", "correct": false, "challengeId": 150, "order":449  },
            { "id":450 , "answer": "by hand", "correct": true, "challengeId": 150, "order":450  },
            { "id":451 , "answer": "kindly", "correct": false, "challengeId": 151, "order":451  },
            { "id":452 , "answer": "loving", "correct": false, "challengeId": 151, "order":452  },
            { "id":453 , "answer": "mean", "correct": true, "challengeId": 151, "order":453  },


            { "id":454 , "answer": "emotional", "correct": false, "challengeId": 152, "order":454  },
            { "id":455 , "answer": "irrational", "correct": false, "challengeId": 152, "order":455  },
            { "id":456 , "answer": "logical", "correct": true, "challengeId": 152, "order":456  },
            { "id":457 , "answer": "final", "correct": false, "challengeId": 153, "order":457  },
            { "id":458 , "answer": "ultimate", "correct": false, "challengeId": 153, "order":458  },
            { "id":459 , "answer": "starting", "correct": true, "challengeId": 153, "order":459  },
            { "id":460 , "answer": "vulnerable", "correct": false, "challengeId": 154, "order":460  },
            { "id":461 , "answer": "susceptible", "correct": false, "challengeId": 154, "order":461  },
            { "id":462 , "answer": "resistant", "correct": true, "challengeId": 154, "order":462  },
            { "id":463 , "answer": "science", "correct": false, "challengeId": 155, "order":463  },
            { "id":464 , "answer": "history", "correct": false, "challengeId": 155, "order":464  },
            { "id":465 , "answer": "language", "correct": true, "challengeId": 155, "order":465  },
            { "id":466 , "answer": "unimportant", "correct": false, "challengeId": 156, "order":466  },
            { "id":467 , "answer": "minor", "correct": false, "challengeId": 156, "order":467  },
            { "id":468 , "answer": "essential", "correct": true, "challengeId": 156, "order":468  },
            { "id":469 , "answer": "written", "correct": false, "challengeId": 157, "order":469  },
            { "id":470 , "answer": "nonverbal", "correct": false, "challengeId": 157, "order":470  },
            { "id":471 , "answer": "oral", "correct": true, "challengeId": 157, "order":471  },
            { "id":472 , "answer": "pessimistic", "correct": false, "challengeId": 158, "order":472  },
            { "id":473 , "answer": "negative", "correct": false, "challengeId": 158, "order":473  },
            { "id":474 , "answer": "hopeful", "correct": true, "challengeId": 158, "order":474  },
            { "id":475 , "answer": "rigid", "correct": false, "challengeId": 159, "order":475  },
            { "id":476 , "answer": "strict", "correct": false, "challengeId": 159, "order":476  },
            { "id":477 , "answer": "adaptable", "correct": true, "challengeId": 159, "order":477  },
            { "id":478 , "answer": "unappreciative", "correct": false, "challengeId": 160, "order":478  },
            { "id":479 , "answer": "indifferent", "correct": false, "challengeId": 160, "order":479  },
            { "id":480 , "answer": "thankful", "correct": true, "challengeId": 160, "order":480  },
            { "id":481 , "answer": "boring", "correct": false, "challengeId": 161, "order":481  },
            { "id":482 , "answer": "uninteresting", "correct": false, "challengeId": 161, "order":482  },
            { "id":483 , "answer": "animated", "correct": true, "challengeId": 161, "order":483  },


            { "id":484 , "answer": "unforgettable", "correct": false, "challengeId": 162, "order":484  },
            { "id":485 , "answer": "memorable", "correct": false, "challengeId": 162, "order":485  },
            { "id":486 , "answer": "subdued", "correct": false, "challengeId": 162, "order":486  },
            { "id":487 , "answer": "limited", "correct": false, "challengeId": 163, "order":487  },
            { "id":488 , "answer": "scarce", "correct": false, "challengeId": 163, "order":488  },
            { "id":489 , "answer": "plentiful", "correct": true, "challengeId": 163, "order":489  },
            { "id":490 , "answer": "generous", "correct": false, "challengeId": 164, "order":490  },
            { "id":491 , "answer": "caring", "correct": false, "challengeId": 164, "order":491  },
            { "id":492 , "answer": "self-centered", "correct": true, "challengeId": 164, "order":492  },
            { "id":493 , "answer": "beautiful", "correct": false, "challengeId": 165, "order":493  },
            { "id":494 , "answer": "attractive", "correct": false, "challengeId": 165, "order":494  },
            { "id":495 , "answer": "unappealing", "correct": true, "challengeId": 165, "order":495  },
            { "id":496 , "answer": "fair", "correct": false, "challengeId": 166, "order":496  },
            { "id":497 , "answer": "just", "correct": false, "challengeId": 166, "order":497  },
            { "id":498 , "answer": "insensitive", "correct": true, "challengeId": 166, "order":498  },
            { "id":499 , "answer": "unknown", "correct": false, "challengeId": 167, "order":499  },
            { "id":500 , "answer": "unfamiliar", "correct": false, "challengeId": 167, "order":500  },
            { "id":501 , "answer": "well-known", "correct": true, "challengeId": 167, "order":501  },
            { "id":502 , "answer": "uncontroversial", "correct": false, "challengeId": 168, "order":502  },
            { "id":503 , "answer": "unambiguous", "correct": false, "challengeId": 168, "order":503  },
            { "id":504 , "answer": "debated", "correct": true, "challengeId": 168, "order":504  },
            { "id":505 , "answer": "local", "correct": false, "challengeId": 169, "order":505  },
            { "id":506 , "answer": "state", "correct": false, "challengeId": 169, "order":506  },
            { "id":507 , "answer": "central", "correct": true, "challengeId": 169, "order":507  },
            { "id":508 , "answer": "sensible", "correct": false, "challengeId": 170, "order":508  },
            { "id":509 , "answer": "reasonable", "correct": false, "challengeId": 170, "order":509  },
            { "id":510 , "answer": "absurd", "correct": true, "challengeId": 170, "order":510  },
            { "id":511 , "answer": "real", "correct": false, "challengeId": 171, "order":511  },
            { "id":512 , "answer": "actual", "correct": false, "challengeId": 171, "order":512  },
            { "id":513 , "answer": "fictional", "correct": true, "challengeId": 171, "order":513  },


            { "id":514 , "answer": "inaccurate", "correct": false, "challengeId": 172, "order":514  },
            { "id":515 , "answer": "incorrect", "correct": false, "challengeId": 172, "order":515  },
            { "id":516 , "answer": "precise", "correct": true, "challengeId": 172, "order":516  },
            { "id":517 , "answer": "natural", "correct": false, "challengeId": 173, "order":517  },
            { "id":518 , "answer": "real", "correct": false, "challengeId": 173, "order":518  },
            { "id":519 , "answer": "synthetic", "correct": true, "challengeId": 173, "order":519  },
            { "id":520 , "answer": "strong", "correct": false, "challengeId": 174, "order":520  },
            { "id":521 , "answer": "durable", "correct": false, "challengeId": 174, "order":521  },
            { "id":522 , "answer": "delicate", "correct": true, "challengeId": 174, "order":522  },
            { "id":523 , "answer": "invisible", "correct": false, "challengeId": 175, "order":523  },
            { "id":524 , "answer": "hidden", "correct": false, "challengeId": 175, "order":524  },
            { "id":525 , "answer": "apparent", "correct": true, "challengeId": 175, "order":525  },
            { "id":526 , "answer": "unimportant", "correct": false, "challengeId": 176, "order":526  },
            { "id":527 , "answer": "minor", "correct": false, "challengeId": 176, "order":527  },
            { "id":528 , "answer": "essential", "correct": true, "challengeId": 176, "order":528  },
            { "id":529 , "answer": "homogeneous", "correct": false, "challengeId": 177, "order":529  },
            { "id":530 , "answer": "uniform", "correct": false, "challengeId": 177, "order":530  },
            { "id":531 , "answer": "varied", "correct": true, "challengeId": 177, "order":531  },
            { "id":532 , "answer": "clean", "correct": false, "challengeId": 178, "order":532  },
            { "id":533 , "answer": "pure", "correct": false, "challengeId": 178, "order":533  },
            { "id":534 , "answer": "contaminated", "correct": true, "challengeId": 178, "order":534  },
            { "id":535 , "answer": "natural", "correct": false, "challengeId": 179, "order":535  },
            { "id":536 , "answer": "organic", "correct": false, "challengeId": 179, "order":536  },
            { "id":537 , "answer": "synthetic", "correct": true, "challengeId": 179, "order":537  },
            { "id":538 , "answer": "incapable", "correct": false, "challengeId": 180, "order":538  },
            { "id":539 , "answer": "unable", "correct": false, "challengeId": 180, "order":539  },
            { "id":540 , "answer": "competent", "correct": true, "challengeId": 180, "order":540  },
            { "id":541 , "answer": "small", "correct": false, "challengeId": 181, "order":541  },
            { "id":542 , "answer": "tiny", "correct": false, "challengeId": 181, "order":542  },
            { "id":543 , "answer": "enormous", "correct": true, "challengeId": 181, "order":543  },


            { "id":544 , "answer": "large", "correct": false, "challengeId": 182, "order":544  },
            { "id":545 , "answer": "excessive", "correct": false, "challengeId": 182, "order":545  },
            { "id":546 , "answer": "reasonable", "correct": true, "challengeId": 182, "order":546  },
            { "id":547 , "answer": "unfamiliar", "correct": false, "challengeId": 183, "order":547  },
            { "id":548 , "answer": "struggling", "correct": false, "challengeId": 183, "order":548  },
            { "id":549 , "answer": "proficient", "correct": true, "challengeId": 183, "order":549  },
            { "id":550 , "answer": "simple", "correct": false, "challengeId": 184, "order":550  },
            { "id":551 , "answer": "basic", "correct": false, "challengeId": 184, "order":551  },
            { "id":552 , "answer": "detailed", "correct": true, "challengeId": 184, "order":552  },
            { "id":553 , "answer": "ordinary", "correct": false, "challengeId": 185, "order":553  },
            { "id":554 , "answer": "boring", "correct": false, "challengeId": 185, "order":554  },
            { "id":555 , "answer": "unbelievable", "correct": true, "challengeId": 185, "order":555  },
            { "id":556 , "answer": "minor", "correct": false, "challengeId": 186, "order":556  },
            { "id":557 , "answer": "gradual", "correct": false, "challengeId": 186, "order":557  },
            { "id":558 , "answer": "fundamental", "correct": true, "challengeId": 186, "order":558  },
            { "id":559 , "answer": "sweet", "correct": false, "challengeId": 187, "order":559  },
            { "id":560 , "answer": "salty", "correct": false, "challengeId": 187, "order":560  },
            { "id":561 , "answer": "sour", "correct": true, "challengeId": 187, "order":561  },
            { "id":562 , "answer": "hearing", "correct": false, "challengeId": 188, "order":562  },
            { "id":563 , "answer": "able to hear", "correct": false, "challengeId": 188, "order":563  },
            { "id":564 , "answer": "hard of hearing", "correct": true, "challengeId": 188, "order":564  },
            { "id":565 , "answer": "modern", "correct": false, "challengeId": 189, "order":565  },
            { "id":566 , "answer": "contemporary", "correct": false, "challengeId": 189, "order":566  },
            { "id":567 , "answer": "ancient", "correct": true, "challengeId": 189, "order":567  },
            { "id":568 , "answer": "destructive", "correct": false, "challengeId": 190, "order":568  },
            { "id":569 , "answer": "harmful", "correct": false, "challengeId": 190, "order":569  },
            { "id":570 , "answer": "sustainable", "correct": true, "challengeId": 190, "order":570  },
            { "id":571 , "answer": "high", "correct": false, "challengeId": 191, "order":571  },
            { "id":572 , "answer": "good", "correct": false, "challengeId": 191, "order":572  },
            { "id":573 , "answer": "small", "correct": true, "challengeId": 191, "order":573  },


            { "id":574 , "answer": "knowledgeable", "correct": false, "challengeId": 192, "order":574  },
            { "id":575 , "answer": "informed", "correct": false, "challengeId": 192, "order":575  },
            { "id":576 , "answer": "unaware", "correct": true, "challengeId": 192, "order":576  },
            { "id":577 , "answer": "physical", "correct": false, "challengeId": 193, "order":577  },
            { "id":578 , "answer": "emotional", "correct": false, "challengeId": 193, "order":578  },
            { "id":579 , "answer": "mental", "correct": true, "challengeId": 193, "order":579  },
            { "id":580 , "answer": "disagree", "correct": false, "challengeId": 194, "order":580  },
            { "id":581 , "answer": "somewhat", "correct": false, "challengeId": 194, "order":581  },
            { "id":582 , "answer": "completely", "correct": true, "challengeId": 194, "order":582  },
            { "id":583 , "answer": "many", "correct": false, "challengeId": 195, "order":583  },
            { "id":584 , "answer": "several", "correct": false, "challengeId": 195, "order":584  },
            { "id":585 , "answer": "almost", "correct": true, "challengeId": 195, "order":585  },
            { "id":586 , "answer": "not at all", "correct": false, "challengeId": 196, "order":586  },
            { "id":587 , "answer": "very", "correct": false, "challengeId": 196, "order":587  },
            { "id":588 , "answer": "partly", "correct": true, "challengeId": 196, "order":588  },
            { "id":589 , "answer": "only", "correct": false, "challengeId": 197, "order":589  },
            { "id":590 , "answer": "simply", "correct": false, "challengeId": 197, "order":590  },
            { "id":591 , "answer": "just", "correct": true, "challengeId": 197, "order":591  },
            { "id":592 , "answer": "figuratively", "correct": false, "challengeId": 198, "order":592  },
            { "id":593 , "answer": "almost", "correct": false, "challengeId": 198, "order":593  },
            { "id":594 , "answer": "exaggeratedly", "correct": false, "challengeId": 198, "order":594  },
            { "id":595 , "answer": "actually", "correct": false, "challengeId": 199, "order":595  },
            { "id":596 , "answer": "really", "correct": false, "challengeId": 199, "order":596  },
            { "id":597 , "answer": "apparently", "correct": true, "challengeId": 199, "order":597  },
            { "id":598 , "answer": "Because", "correct": false, "challengeId": 200, "order":598  },
            { "id":599 , "answer": "Due to", "correct": false, "challengeId": 200, "order":599  },
            { "id":600 , "answer": "In spite of", "correct": true, "challengeId": 200, "order":600  },
            { "id":601 , "answer": "quickly", "correct": false, "challengeId": 201, "order":601  },
            { "id":602 , "answer": "superficially", "correct": false, "challengeId": 201, "order":602  },
            { "id":603 , "answer": "completely", "correct": true, "challengeId": 201, "order":603  }
            ]
        )

    } catch (e: any) {
        console.log(e);
        throw new Error("Failed to seed the database");
    }
}

main();