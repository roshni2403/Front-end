import destination from '../models/destination.js';

export const createdestination = async (req, res) => {
    const { title, city, address, distance, desc, photo } = req.body;

    try {
        const newdestination = new destination({
            title,
            city,
            address,
            distance,
            desc,
            photo
        });
        const saveddestination = await newdestination.save();
        res.status(200).json({ success: true, message: 'Successfully created', data: saveddestination });
    } catch (err) {
        console.error('Error creating destination:', err);
        res.status(500).json({ success: false, message: 'Failed to create. Try again' });
    }
};
