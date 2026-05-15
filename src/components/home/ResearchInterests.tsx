'use client';

import { motion } from 'framer-motion';

interface ResearchInterest {
    title: string;
    description: string;
}

interface ResearchInterestsProps {
    interests: ResearchInterest[];
    title?: string;
}

export default function ResearchInterests({ interests, title = 'Research Interests' }: ResearchInterestsProps) {
    if (!interests || interests.length === 0) {
        return null;
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">{title}</h2>
            <div className="space-y-4">
                {interests.map((interest, index) => (
                    <motion.div
                        key={interest.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700"
                    >
                        <h3 className="font-semibold text-accent mb-2">{interest.title}</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {interest.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
