import type { CourseType } from "./content/courses";

const Course = ({ course }: { course: CourseType }) => {
    return (
        <div className="course">
            <p className="course-name">{course.name}</p>
            <div className="course-info"> 
                <p><strong>Description: </strong>{course.description}</p>
                <p><strong>Duration: </strong>{course.course_duration}</p>
                <p><strong>Content: </strong>{course.content}</p>
                <p><strong>Level: </strong>{course.level}</p>
                <p><strong>Date start: </strong>{course.date_start}</p>
                <p><strong>Week days: </strong>{course.week_days}</p>
            </div>
        </div>
    )
}

export default Course;