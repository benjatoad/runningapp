window.trainingPlanData = {
    id: "sub25_5k_sub60_10k_v1", // Unique ID for this plan to avoid localStorage conflicts
    title: "Your 8-Week Training Plan",
    subtitle: "To a Sub-25min 5k & Sub-60min 10k",
    daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    workoutTypes: ['Interval Run', 'Strength A', 'Tempo Run', 'Strength B', 'Rest', 'Long Run', 'Rest'],
    
    paceGuide: {
        labels: ['Easy Run', 'Tempo Run', 'Interval (400m)', 'Long Run'],
        displayPace: ['11:00-12:00', '9:30-10:00', '2:00-2:05/lap', '11:30-12:30']
    },

    strengthWorkouts: {
        'A': [
            { name: 'Goblet Squats', desc: 'Hold a weight at your chest. Squat down keeping your chest up and back straight.', sets: '2-3', reps: '10-15' },
            { name: 'Walking Lunges', desc: 'Step forward into a lunge, then push off and step into the next lunge with the other leg.', sets: '2-3', reps: '10-15/leg' },
            { name: 'Glute Bridges', desc: 'Lie on your back, knees bent. Lift hips until your body is in a straight line from shoulders to knees.', sets: '2-3', reps: '10-15' },
            { name: 'Plank', desc: 'Hold a push-up position with a flat back and engaged core.', sets: '2-3', reps: '30-60s' },
            { name: 'Calf Raises', desc: 'Stand on a flat surface and raise your heels up, then lower them back down.', sets: '2-3', reps: '10-15' },
        ],
        'B': [
            { name: 'Single-Leg Deadlifts', desc: 'Stand on one leg, hinge at your hips, extending the other leg straight behind you.', sets: '2-3', reps: '10-15/leg' },
            { name: 'Step-Ups', desc: 'Use a bench or sturdy chair. Step up with one foot, then the other. Alternate lead leg.', sets: '2-3', reps: '10-15/leg' },
            { name: 'Push-ups', desc: 'Perform standard push-ups, or modified on your knees if needed.', sets: '2-3', reps: '10-15' },
            { name: 'Dumbbell Rows', desc: 'Lean on a bench. Pull a dumbbell up towards your chest, keeping your elbow close.', sets: '2-3', reps: '10-15/arm' },
            { name: 'Russian Twists', desc: 'Sit with knees bent, feet off the ground. Twist your torso from side to side.', sets: '2-3', reps: '10-15/side' },
        ]
    },

    weeklyPlan: [
        // Week 1
        { intervalReps: 6, tempoMins: 20, longRunDist: 3.5 },
        // Week 2
        { intervalReps: 7, tempoMins: 25, longRunDist: 4.0 },
        // Week 3
        { intervalReps: 8, tempoMins: 30, longRunDist: 4.5 },
        // Week 4
        { intervalReps: 9, tempoMins: 35, longRunDist: 5.0 },
        // Week 5
        { intervalReps: 10, tempoMins: 40, longRunDist: 5.5 },
        // Week 6
        { intervalReps: 11, tempoMins: 40, longRunDist: 6.0 },
        // Week 7
        { intervalReps: 12, tempoMins: 30, longRunDist: 6.5 },
        // Week 8
        { intervalReps: 8, tempoMins: 20, longRunDist: 7.0 },
    ]
};
