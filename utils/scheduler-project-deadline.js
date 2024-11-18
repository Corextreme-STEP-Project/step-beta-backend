// to trigger notfication before deadline
export const scheduleProjectDeadlineNotification = (projectEnds, projectId, io) => {
  const currentTime = new Date();
  const deadlineTime = projectEnds;

  // calculate time untl deadline
  const timeUntilDeadline = deadlineTime - currentTime;

  // schedule if deadline is in the future
  if (timeUntilDeadline > 0) {
    // schedule a notification 3 days before the deadliine
    const threeDaysBefore = 3 * 24 * 60 * 60 * 1000;
    const notificationThreeDays = timeUntilDeadline - threeDaysBefore;
    if (notificationThreeDays > 0) {
      setTimeout(() => {
        io.emit("notification", {
          projectId,
          message: `Reminder:Project $project_Id} ends in 3 days!`,
        });
        console.log(`3 day notification for project ID ${projectId}`);
      }, notificationThreeDays);
    } else {
      console.log(`Deadline for project ID: ${projectId} has already passed`);
    }
  }
};


export const scheduleStatusUpdateNotfication =(projectId, projectStatus, io) => {
    const message = `Project ${projectId} has been updated, moved to ${projectStatus} stage.`;
    // send notification to connected clients via socket.io
    io.emit ('notification', {
        projectId, message:message,
    })
    console.log(`Status update notification sent for projectID: ${projectId}, status: ${projectStatus}`)
};