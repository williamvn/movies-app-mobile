import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, LayoutChangeEvent } from 'react-native';
import { StyleSheet } from 'react-native';
import { globalStyles } from '../theme/main';

interface CropedTextProps {
    children: React.ReactNode[]
}

const CropedText = ({ children }: CropedTextProps) => {
    const [showAll, setShowAll] = useState(true);
    const [textHeight, setTextHeight] = useState(0);
    const [displaySeeMoreButton, setDisplaySeeMoreButton] = useState(false);
    const [hide, setHide] = useState(true);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    useEffect(() => {
        console.log('areMoreThan3Lines', areMoreThan3Lines());
        if (areMoreThan3Lines()) {
            setDisplaySeeMoreButton(true);
        }
    }, [textHeight])

    useEffect(() => {
        if (displaySeeMoreButton) {
            setShowAll(false);
        }
    }, [displaySeeMoreButton])

    const areMoreThan3Lines = (): boolean => {
        return textHeight > 4 * globalStyles.subparagraph.lineHeight;
    }


    const onTextLayout = (event: LayoutChangeEvent) => {
        setHide(false);
        setTextHeight(event.nativeEvent.layout.height);
    };

    return (
        <View>
            <Text style={globalStyles.subparagraph} numberOfLines={showAll ? undefined : 3} onLayout={onTextLayout}>
                {children}
            </Text>
            {displaySeeMoreButton && (
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
    container: {
        display: 'flex'
    },
    hidden: {
        width: 0
    }
});

export default CropedText;
