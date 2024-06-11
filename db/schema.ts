import {boolean, integer, pgTable, serial, text} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";


export const courses = pgTable("course", {
    id: serial("id").primaryKey(),
    courseName: text("course_name").notNull(),
    courseImage: text("course_image").notNull(),
    // courseActive:boolean("course_active").notNull(),
})

export const coursesRelations = relations(courses, ({one,many}) => ({
    userProgress:one(userProgress),
    units: many(units)
}))

export const units = pgTable("units", {
    id: serial("id").primaryKey(),
    unitName: text("unit_name").notNull(),
    courseId:integer("course_id").references(()=>courses.id,{onDelete:"cascade"}).notNull(),
    order: integer("order").notNull(),
})

export const unitsRelation = relations(units, ({one,many}) => ({
    course:one(courses,{
        fields:[units.courseId],
        references:[courses.id]
    }),
    // challengeProgress:many(challengeProgress),
    challenges: many(challenges),
    unitProgress:many(unitProgress)
}))

export const unitProgress=pgTable("unitProgress",{
    id:serial("id").primaryKey(),
    activeUnitId:integer("active_unit_id").references(()=>units.id,{onDelete:"cascade"}).notNull(),
})

export const unitProgressRelations=relations(unitProgress,({one})=>({
    activeUnit:one(units,{
        fields:[unitProgress.activeUnitId],
        references:[units.id]
    })
}))

export const challenges = pgTable("challenges", {
    id: serial("id").primaryKey(),
    question: text("question").notNull(),
    word:text("word").notNull(),
    order: integer("order").notNull(),
    unitId:integer("unit_id").references(()=>units.id,{onDelete:"cascade"}).notNull(),
})

export const challengesRelation=relations(challenges,({one,many})=>({
    unit:one(units,{
       fields:[challenges.unitId],
        references:[units.id]
    }),
    answers:many(answers),
    challengeProgress:many(challengeProgress)
}))

export const answers=pgTable("answers",{
    id:serial("id").primaryKey(),
    answer:text("answer").notNull(),
    correct:boolean("correct").notNull(),
    order:integer('order').notNull(),
    challengeId:integer("challenge_id").references(()=>challenges.id,{onDelete:"cascade"}).notNull()
})

export const answersRelation=relations(answers,({one})=>({
    answer:one(challenges,{
        fields:[answers.challengeId],
        references:[challenges.id]
    })
}))

export const challengeProgress=pgTable("challenge_progress",{
    id:serial("id").primaryKey(),
    challengeId:integer("challenge_id").references(()=>challenges.id,{onDelete:"cascade"}).notNull(),
    completed:boolean("completed").notNull().default(false),
})

export const challengeProgressRelation=relations(challengeProgress,({one})=>({
    // unit:one(units,{
    //     fields:[challengeProgress.unitId],
    //     references:[units.id]
    // }),
    challenge:one(challenges,{
        fields:[challengeProgress.challengeId],
        references:[challenges.id]
    }),

}))

export const userProgress=pgTable("userProgress",{
    id:serial("id").primaryKey(),
    activeCourseId:integer("active_course_id").references(()=>courses.id,{onDelete:"cascade"}),
    points:integer("points").default(50).notNull()
})

export const userProgressRelation=relations(userProgress,({one})=>({
    activeCourse:one(courses,{
        fields:[userProgress.activeCourseId],
        references:[courses.id]
    })
}))