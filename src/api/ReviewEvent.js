import review from "../redux/reducers/review";

const EVENT_TYPE = {
    COMMENT: 'COMMENT',
    STATUS_UPDATE: 'STATUS_UPDATE'
}
export default class ReviewEvent {
    constructor(reviewId, userName, eventType, metaData, createdAt) {
        this.reviewId = reviewId;
        this.userName = userName;
        this.eventType = eventType;
        this.metaData = metaData;
        this.createdAt = createdAt;
    }
    
    static newComment(reviewId, userName, comment, createdAt) {
        return new ReviewEvent(reviewId, userName, EVENT_TYPE.COMMENT, comment, createdAt);
    }

    static newStatusEvent(reviewId, userName, metaData, createdAt) {
        return new ReviewEvent(reviewId, userName, EVENT_TYPE.STATUS_UPDATE, metaData, createdAt);
    }

    static batchConvert(objs) {
        let events = [];
        for (var i = 0; i < objs.length; i++) {
            let newEvent;
            if (objs[i].event_type == EVENT_TYPE.COMMENT) {
                newEvent = ReviewEvent.newComment(
                    objs[i].review_id,
                    objs[i].user,
                    objs[i].meta_data,
                    new Date(objs[i].created_at));
            } else {
                newEvent = ReviewEvent.newStatusEvent(
                    objs[i].review_id,
                    "Status Update",
                    objs[i].user.split("@")[0] + " updated status to " + objs[i].meta_data,
                    new Date(objs[i].created_at));
            }
            events.push(newEvent);
        }
        return events;
    }

    getReviewId() {
        return this.reviewId;
    }
    getUserName() {
        return this.userName;
    }
    getEventType() {
        return this.eventType;
    }
    getMetaData() {
        return this.metaData;
    }
    getCreatedAt() {
        return this.createdAt;
    }
}