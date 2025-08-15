// This file contains all available training plans for the web app.
window.trainingPlans = {
    // This is the original plan you created.
    "original": {
        id: "sub25_5k_sub60_10k_v3",
        title: "Original 8-Week Plan",
        subtitle: "Balanced Running & Strength",
        daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        workoutTypes: ['Interval Run', 'Upper Push', 'Tempo Run', 'Upper Pull', 'Legs & Core', 'Long Run', 'Rest'],
        paceGuide: {
            labels: ['Easy Run', 'Tempo Run', 'Interval (400m)', 'Long Run'],
            displayPace: ['11:00-12:00', '9:30-10:00', '2:00-2:05/lap', '11:30-12:30']
        },
        strengthWorkouts: {
            'Legs & Core': [
                { name: 'Dumbbell Goblet Squats', desc: 'Hold one dumbbell vertically at your chest. Squat down keeping your chest up and back straight.', sets: '3-4', reps: '8-12' },
                { name: 'TRX Hamstring Curls', desc: 'Lie on your back with your heels in the TRX straps. Lift your hips off the ground and pull your heels towards your glutes.', sets: '3', reps: '10-15' },
                { name: 'Dumbbell Walking Lunges', desc: 'Hold dumbbells at your sides. Step forward into a lunge, then push off to the next lunge.', sets: '3', reps: '10-12/leg' },
                { name: 'TRX Pike', desc: 'Start in a plank position with your feet in the TRX straps. Hinge at your hips, lifting them towards the ceiling.', sets: '3', reps: '8-12' },
                { name: 'Hanging Knee Raises', desc: 'Hang from a pull-up bar and raise your knees towards your chest.', sets: '3', reps: '10-15' },
                { name: 'Dumbbell Calf Raises', desc: 'Hold dumbbells and stand on a flat surface. Raise your heels up, then lower them back down.', sets: '3', reps: '15-20' },
            ],
            'Upper Push': [
                { name: 'Push-ups', desc: 'Perform standard push-ups, or modified on your knees.', sets: '3-4', reps: 'To failure' },
                { name: 'Dumbbell Overhead Press', desc: 'Sit or stand, pressing dumbbells from your shoulders to overhead.', sets: '3-4', reps: '8-12' },
                { name: 'TRX Chest Press', desc: 'Lean forward with hands in the TRX handles. Lower your chest towards your hands, then press back up.', sets: '3', reps: '10-15' },
                { name: 'Dumbbell Lateral Raises', desc: 'Stand with dumbbells at your sides. Raise them out to the side to shoulder height.', sets: '3', reps: '12-15' },
                { name: 'TRX Tricep Press', desc: 'Face away from the anchor point. Lean forward and bend your elbows, lowering your head towards your hands, then extend.', sets: '3', reps: '10-15' },
            ],
            'Upper Pull': [
                { name: 'Pull-ups / Chin-ups', desc: 'Use a wide grip (pull-ups) or narrow grip (chin-ups) to pull your chin over the bar.', sets: '3-4', reps: 'To failure' },
                { name: 'TRX Rows', desc: 'Lean back with hands on the TRX handles, body straight. Pull your chest towards the handles.', sets: '3-4', reps: '10-15' },
                { name: 'Dumbbell Renegade Rows', desc: 'Start in a high plank position holding dumbbells. Row one dumbbell up to your chest, then the other.', sets: '3', reps: '8-10/arm' },
                { name: 'Dumbbell Bicep Curls', desc: 'Stand and curl dumbbells from your thighs up to your shoulders.', sets: '3', reps: '10-15' },
                { name: 'TRX Reverse Flys', desc: 'Face the anchor point, lean back slightly with arms extended forward. Open your arms out to the side.', sets: '3', reps: '12-15' },
            ]
        },
        weeklyPlan: Array(8).fill({}), // Generic structure for the original plan
        warmupStretches: [
            { name: "Jumping Jacks", desc: "30 seconds." },
            { name: "High Knees", desc: "30 seconds." },
            { name: "Leg Swings", desc: "10-12 each direction." },
            { name: "Torso Twists", desc: "10-12 each side." },
            { name: "Arm Circles", desc: "10-15 forward and backward." }
        ],
        cooldownStretches: [
            { name: "Standing Quad Stretch", desc: "Hold for 30 seconds per leg." },
            { name: "Standing Hamstring Stretch", desc: "Hold for 30 seconds per leg." },
            { name: "Calf Stretch", desc: "Hold for 30 seconds per leg." },
            { name: "Glute Stretch (Pigeon Pose)", desc: "Hold for 30 seconds per side." },
            { name: "Triceps Stretch", desc: "Hold for 30 seconds per arm." },
            { name: "Chest Stretch", desc: "Hold for 30 seconds." }
        ]
    },
    // This is the new, detailed plan you provided.
    "detailed": {
        id: "detailed_sub25_5k_v1",
        title: "Detailed 8-Week Plan",
        subtitle: "Day-by-Day Specificity",
        daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        generalNotes: "Every run: 8–10 min easy + 3–4 drills (A-skips, high knees, leg swings) + 3–4 × 20 s strides (except on pure recovery/easy days), cool-down 5–10 min.",
        weeklyPlan: [
            // Week 1
            {
                summary: "Establish rhythm (≈12–15 miles)",
                workouts: [
                    { type: 'Intervals', details: '6 × 400 m @ ~2:12–2:14; jog 200 m between.' },
                    { type: 'Legs & Core', details: 'See strength menu. Main lifts: 3 sets.' },
                    { type: 'Push', details: 'See strength menu. Main lifts: 3 sets.' },
                    { type: 'Tempo', details: '2 × 8 min @ tempo, 3 min easy jog between.' },
                    { type: 'Pull', details: 'See strength menu. Main lifts: 3 sets.' },
                    { type: 'Long Run', details: '55–60 min easy.' },
                    { type: 'Rest', details: 'Active recovery or full rest.' }
                ]
            },
            // Week 2
            {
                summary: "Nudge volume (≈14–17 mi)",
                workouts: [
                    { type: 'Intervals', details: '7 × 400 m @ target; 200 m jogs.' },
                    { type: 'Legs & Core', details: 'Add 1 set to squats OR RDLs.' },
                    { type: 'Push', details: 'Aim for +1 rep on main lifts.' },
                    { type: 'Tempo', details: '1 × 18–20 min continuous @ tempo.' },
                    { type: 'Pull', details: 'Same as last week.' },
                    { type: 'Long Run', details: '60–65 min easy (last 10 min steady if feeling good).' },
                    { type: 'Rest', details: 'Active recovery or full rest.' }
                ]
            },
            // Week 3
            {
                summary: "Specificity build (≈15–19 mi)",
                workouts: [
                    { type: 'Intervals', details: '5 × 600 m @ 3:18–3:22; 300 m jogs.' },
                    { type: 'Legs & Core', details: 'Squat 3–4×8–10; RDL 3×8–10; Lunges 3×10/leg; Calves 3×15–20; Suitcase carry 2×20–40 m/side.' },
                    { type: 'Push', details: 'Unchanged, aim +5 lb or +1 rep somewhere.' },
                    { type: 'Tempo', details: '2 × 10 min @ tempo; 3 min jog between.' },
                    { type: 'Pull', details: 'Unchanged.' },
                    { type: 'Long Run', details: '65–70 min easy.' },
                    { type: 'Rest', details: 'Active recovery or full rest.' }
                ]
            },
            // Week 4
            {
                summary: "Deload (volume −30–40%)",
                workouts: [
                    { type: 'Intervals', details: '6 × 300 m @ 400-pace feel; full 200 m easy between.' },
                    { type: 'Legs & Core', details: 'Cut sets in half; skip lunges this week.' },
                    { type: 'Push', details: 'Keep, but −1 set main press.' },
                    { type: 'Tempo', details: '15 min steady @ tempo-low end.' },
                    { type: 'Pull', details: '−1 set on rows.' },
                    { type: 'Long Run', details: '50–55 min easy only.' },
                    { type: 'Rest', details: 'Active recovery or full rest.' }
                ]
            },
            // Week 5
            {
                summary: "Rebuild & extend (≈16–20 mi)",
                workouts: [
                    { type: 'Intervals', details: '4 × 800 m @ 4:24–4:30; 400 m jogs.' },
                    { type: 'Legs & Core', details: 'Full volume returns; keep RIR 1–2.' },
                    { type: 'Push', details: 'Progress 5–10 lb total across presses if able.' },
                    { type: 'Tempo', details: '22–24 min continuous @ tempo.' },
                    { type: 'Pull', details: 'Same as Week 3.' },
                    { type: 'Long Run', details: '70–75 min easy (optional last 15 min steady).' },
                    { type: 'Rest', details: 'Active recovery or full rest.' }
                ]
            },
            // Week 6
            {
                summary: "Peak quality (≈18–22 mi)",
                workouts: [
                    { type: 'Intervals', details: '5 × 1 km @ 5:30–5:36; 400 m jogs.' },
                    { type: 'Legs & Core', details: 'Keep total sets, but stop 2 RIR on squats to stay fresh.' },
                    { type: 'Push', details: 'Same as Week 5.' },
                    { type: 'Tempo', details: '3 × 8 min @ tempo; 2–3 min jogs.' },
                    { type: 'Pull', details: 'Same as Week 5.' },
                    { type: 'Long Run', details: '75–85 min easy.' },
                    { type: 'Rest', details: 'Active recovery or full rest.' }
                ]
            },
            // Week 7
            {
                summary: "Specific 10K feel (≈18–22 mi)",
                workouts: [
                    { type: 'Intervals', details: '3 × 1 mile @ ~9:20–9:30/mi (10K feel), 3–4 min easy jogs.' },
                    { type: 'Legs & Core', details: 'Keep moderate; skip lunges or reduce to 2×8/leg.' },
                    { type: 'Push', details: 'Same as Week 6.' },
                    { type: 'Tempo', details: '20 min continuous; finish with 4 × 20 s strides.' },
                    { type: 'Pull', details: 'Same as Week 6.' },
                    { type: 'Long Run', details: '70–75 min easy (no steady finish).' },
                    { type: 'Rest', details: 'Active recovery or full rest.' }
                ]
            },
            // Week 8
            {
                summary: "Taper & Race/Time Trial",
                workouts: [
                    { type: 'Sharpen', details: '6 × 200 m fast-but-relaxed; full recovery (walk/jog 200 m).' },
                    { type: 'Legs & Core', details: 'Light: Goblet 2×6–8, RDL 2×6–8; brief core.' },
                    { type: 'Push', details: 'Light: 2×8 on presses, easy effort.' },
                    { type: 'Primer Tempo', details: '2 × 6 min @ tempo-low end; long easy warm-up/cool-down.' },
                    { type: 'OFF', details: 'OFF or 20 min easy + 4 strides.' },
                    { type: 'Race/TT 10K', details: 'Start ~9:40–9:45/mi for first 2 mi, settle near 9:30–9:35 by halfway, then progress.' },
                    { type: 'Recovery', details: 'Easy 20–30 min or full rest + mobility.' }
                ]
            }
        ],
        strengthWorkouts: {
            'Legs & Core': [
                { name: 'Dumbbell Goblet Squat', sets: '3–4', reps: '8–12' },
                { name: 'Dumbbell RDL', sets: '3–4', reps: '8–12' },
                { name: 'Walking Lunge', sets: '2–3', reps: '10–12/leg' },
                { name: 'TRX Pike', sets: '2–3', reps: '8–12' },
                { name: 'Hanging Knee Raises', sets: '2–3', reps: '10–15' },
                { name: 'Calves (Straight & Bent)', sets: '3', reps: '15–20 each' },
                { name: 'Pallof Press or Suitcase Carries', sets: '2–3', reps: '20–40 m' }
            ],
            'Push': [
                { name: 'Dumbbell Floor/Bench Press', sets: '3–4', reps: '6–10' },
                { name: 'Dumbbell Overhead Press', sets: '3', reps: '8–10' },
                { name: 'Push-ups', sets: '2–3', reps: 'Last set AMRAP' },
                { name: 'Lateral Raises', sets: '3', reps: '12–15' },
                { name: 'Face Pulls / Band ER', sets: '2–3', reps: '12–15' }
            ],
            'Pull': [
                { name: 'Pull-ups/Chin-ups', sets: '3–4', reps: 'AMRAP or 4–6 weighted' },
                { name: 'One-arm DB Row', sets: '3–4', reps: '6–10 (go heavier)' },
                { name: 'TRX Row', sets: '3', reps: '10–15' },
                { name: 'Dumbbell Curls', sets: '2–3', reps: '10–12' },
                { name: 'TRX Reverse Fly', sets: '2–3', reps: '12–15' },
                { name: 'Dead Hangs (Optional)', sets: '2', reps: '20–40 s' }
            ]
        }
    }
};
