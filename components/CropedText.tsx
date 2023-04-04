import React, { useState } from 'react';
import { Text, TouchableOpacity, View, LayoutChangeEvent } from 'react-native';
import { StyleSheet } from 'react-native';
import { globalStyles } from '../theme/main';

interface CropedTextProps {
    children: React.ReactNode[]
}

const CropedText = ({ children }: CropedTextProps) => {
    const [showAll, setShowAll] = useState(false);
    const [textHeight, setTextHeight] = useState(0);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const onTextLayout = (event: LayoutChangeEvent) => {
        setTextHeight(event.nativeEvent.layout.height);
    };

    return (
        <View>
            <Text style={globalStyles.subparagraph} numberOfLines={showAll ? undefined : 3} onLayout={onTextLayout}>
                {children}
            </Text>
            {textHeight > 3 * globalStyles.subparagraph.fontSize * 1.2 && (
                <TouchableOpacity onPress={toggleShowAll}>
                    <Text style={styles.seeMore}>{showAll ? 'See less' : 'See more'}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    seeMore: {
        ...globalStyles.subparagraph,
        fontWeight: 'bold',
    },
});

export default CropedText;
