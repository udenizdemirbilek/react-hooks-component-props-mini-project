import React from "react"
// ☕️ 🍱
function Article ({title, date="January 1, 1970", preview, minutes}) {

function howLong (time){
if (time > 10) {
    return "🍱".repeat(Math.ceil(time/10))    
} else {
    return "☕️".repeat(Math.ceil(time/5))
}
}

    return (
        <article className="article-item">
        <h3>{title}</h3>
        <small>{date}</small> . <small>{howLong(minutes)}</small>
        <p>{preview}</p>
        </article>
    )
}

export default Article