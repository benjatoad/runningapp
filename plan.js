window.trainingPlanData = {
    id: "sub25_5k_sub60_10k_v2", // Updated ID for the new plan
    title: "Your 8-Week Training Plan",
    subtitle: "To a Sub-25min 5k & Sub-60min 10k",
    daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    // Updated weekly schedule with 3 strength days
    workoutTypes: ['Interval Run', 'Upper Push', 'Tempo Run', 'Upper Pull', 'Legs & Core', 'Long Run', 'Rest'],
    
    paceGuide: {
        labels: ['Easy Run', 'Tempo Run', 'Interval (400m)', 'Long Run'],
        displayPace: ['11:00-12:00', '9:30-10:00', '2:00-2:05/lap', '11:30-12:30']
    },

    // New strength workout structure
    strengthWorkouts: {
        'Legs & Core': [
            { name: 'Goblet Squats', desc: 'Hold a weight at your chest. Squat down keeping your chest up and back straight. Essential for quad and glute strength.', sets: '3-4', reps: '8-12' },
            { name: 'Romanian Deadlifts', desc: 'Hold a barbell or dumbbells. Hinge at your hips, keeping your back straight and legs almost straight to target hamstrings.', sets: '3-4', reps: '8-12' },
            { name: 'Walking Lunges', desc: 'Step forward into a lunge, then push off and step into the next lunge. Great for single-leg stability.', sets: '3', reps: '10-12/leg' },
            { name: 'Plank', desc: 'Hold a push-up position with a flat back and engaged core to build core endurance.', sets: '3', reps: '45-90s' },
            { name: 'Hanging Knee Raises', desc: 'Hang from a bar and raise your knees towards your chest to strengthen lower abs and hip flexors.', sets: '3', reps: '10-15' },
            { name: 'Calf Raises', desc: 'Stand on a flat surface and raise your heels up, then lower them back down to build calf power.', sets: '3', reps: '15-20' },
        ],
        'Upper Push': [
            { name: 'Push-ups', desc: 'Perform standard push-ups, or modified on your knees. Focus on chest, shoulders, and triceps.', sets: '3-4', reps: 'To failure' },
            { name: 'Dumbbell Bench Press', desc: 'Lie on a bench and press dumbbells up from your chest. Builds chest and shoulder strength.', sets: '3-4', reps: '8-12' },
            { name: 'Overhead Press (Dumbbell)', desc: 'Sit or stand, pressing dumbbells from your shoulders to overhead for shoulder development.', sets: '3-4', reps: '8-12' },
            { name: 'Lateral Raises', desc: 'Stand with dumbbells at your sides. Raise them out to the side to shoulder height to work the side deltoids.', sets: '3', reps: '12-15' },
            { name: 'Tricep Dips (on bench)', desc: 'Place hands on a bench behind you, lower your body down and push back up.', sets: '3', reps: '10-15' },
        ],
        'Upper Pull': [
            { name: 'Pull-ups / Assisted Pull-ups', desc: 'Use a wide grip to pull your chin over the bar. Use a band for assistance if needed. The ultimate back builder.', sets: '3-4', reps: 'To failure' },
            { name: 'Bent Over Rows (Dumbbell)', desc: 'Hinge at the waist with a flat back. Pull dumbbells up towards your lower chest to build a strong back.', sets: '3-4', reps: '8-12' },
            { name: 'Face Pulls', desc: 'Use a cable machine or resistance band. Pull the rope towards your face, squeezing your rear delts for shoulder health.', sets: '3', reps: '12-15' },
            { name: 'Bicep Curls (Dumbbell)', desc: 'Stand and curl dumbbells from your thighs up to your shoulders.', sets: '3', reps: '10-15' },
            { name: 'Reverse Flys', desc: 'Hinge forward with a flat back, arms extended. Open your arms out to the side, squeezing your shoulder blades.', sets: '3', reps: '12-15' },
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
    ],

    warmupStretches: [
        { name: "Calf Stretch", desc: "Stand facing a wall with your hands on it. Step one foot back and press the heel to the floor. Hold for 30 seconds per leg." },
        { name: "Hurdler Stretch", desc: "Sit down with one leg tucked in to form a triangle and touch your opposite hand to your extended leg. Hold for 30 seconds per leg." },
        { name: "Toe-touches", desc: "Bend at the hips to touch your toes. Make sure your knees stay straight. Hold for 30 seconds." },
        { name: "Jumping Jacks", desc: "Start with feet together and arms at your sides, then jump while spreading your legs and bringing your arms overhead. 30 seconds." },
        { name: "High Knees", desc: "Run in place or move forward, bringing your knees up towards your chest. Keep your core engaged. Do for 30 seconds." },
        { name: "Leg Swings (Forward & Sideways)", desc: "Hold onto something for balance and swing each leg forward/backward and side-to-side. 10-12 swings each direction." },
        { name: "Torso Twists", desc: "Stand with feet shoulder-width apart and twist your upper body from side to side. 10-12 twists each side." },
        { name: "Arm Circles", desc: "Extend your arms to the side and make small circles, gradually getting bigger. 10-15 circles forward and backward." }
    ],

    cooldownStretches: [
        { name: "Standing Quad Stretch", desc: "Stand on one leg, pull the other foot towards your glute, feeling a stretch in the front of your thigh. Hold for 30 seconds per leg." },
        { name: "Standing Hamstring Stretch", desc: "Extend one leg forward with the heel on the ground. Hinge at your hips and lean forward until you feel a stretch. Hold for 30 seconds per leg." },
        { name: "Calf Stretch", desc: "Stand facing a wall with your hands on it. Step one foot back and press the heel to the floor. Hold for 30 seconds per leg." },
        { name: "Glute Stretch (Pigeon Pose)", desc: "From a plank position, bring one knee forward towards the opposite hand, lowering your hips. Hold for 30 seconds per side." },
        { name: "Triceps Stretch", desc: "Reach one arm overhead, bend the elbow, and gently pull the elbow with the opposite hand. Hold for 30 seconds per arm." },
        { name: "Chest Stretch", desc: "Clasp your hands behind your back and gently pull them down and away from your body. Hold for 30 seconds." }
    ]
};



