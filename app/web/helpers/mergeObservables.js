import { isObservableArray, isObservableMap } from 'mobx';
/**
 * 合并mobx映射关系
 * @param target   合并的对象
 * @param source   被合并的资源
 */
export default (target, source) => {
    // 当被合并的资源部存在的时候 直接返回主目标
    if (!source) {
        return target;
    }
    Object.keys(target).forEach((key) => {
        if (typeof target[key] === 'object') {
            if (isObservableArray(target[key])) {
                return target[key].replace(source);
            }
            if (isObservableMap(target[key])) {
                return target[key].merge(source);
            }
            target[key] = source;
        }
        else {
            target[key] = source;
        }
        return target;
    });
    return target;
};
//# sourceMappingURL=mergeObservables.js.map