const maxArea = function (height) {
    var result = 0;

    var currentVolume;
    for (var i = 0, j = height.length - 1; i < j; ) {
        currentVolume = Math.min(height[i], height[j]) * (j - i);
        if (currentVolume > result) result = currentVolume;

        height[i] < height[j] ? i++ : j--;
    }

    return result;
};

export default maxArea;
