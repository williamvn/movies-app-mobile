import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { globalStyles } from '../theme/main';

interface CropedTextProps extends IntrinsicAttributes {
    children: React.ReactNode[]
}

const CropedText = ({ children }: CropedTextProps) => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <View>
            <Text style={globalStyles.subparagraph} numberOfLines={showAll ? undefined : 3}>{children}</Text>
            {!showAll && (
                <TouchableOpacity onPress={toggleShowAll}>
                    <Text style={styles.seeMore}>See more</Text>
                </TouchableOpacity>
            )
            }
        </View >
    );
};

const styles = StyleSheet.create({
    seeMore: {
        ...globalStyles.subparagraph,
        fontWeight: "bold"
    }
});

export default CropedText;
