package result.process;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class LinearRegression {
    private String name;

    private double k;

    private double b;

    private double MSE_LOC;
    private double MAE_LOC;
    private double R2_LOC;

    private double MSE_DEF;
    private double MAE_DEF;
    private double R2_DEF;

    private double MSE_OCC;
    private double MAE_OCC;
    private double R2_OCC;

    private double MSE_NODE;
    private double MAE_NODE;
    private double R2_NODE;
    private double[] x;
    private double[] y;
    //actual value from rq3new_loc_Result Array to get y_loc_actual where y is construct(validate), search(find) -- need to add, traverse(getInfoArray)
    //predicted value need rq3new_loc? as x_loc to use function predict() to get predicted y_loc_predicted



    //  search_DEF_regression_ASTI;
    //  search_DEF_regression_STI;
    //  traverse_OCC_regression_ASTI;
    //  traverse_LOC_regression_STI;
    //  construct_NODE_regression_ASTI;
    //  construct_NODE_regression_STI;
    public LinearRegression(double[] x, double[] y) {
        this.x = x;
        this.y = y;
    }

    public LinearRegression(ArrayList<Integer> x, ArrayList<Integer> y) {
        this.x = integerListToDoubleArray(x);
        this.y = integerListToDoubleArray(y);
    }

    public LinearRegression(ArrayList<Integer> x, ArrayList<Integer> y, String name) {
        this.x = integerListToDoubleArray(x);
        this.y = integerListToDoubleArray(y);
        this.name = name;
        this.k = calculateSlope();
        this.b = calculateIntercept();
    }

    // ASTI - Traverse - LOC
    public ArrayList<double[]> modelEvaluation(Type implementation, Type component, Type primaryFeature, Type dataset, ArrayList<RQResult> rqResults){
        //k and b is known;
        // rqResults is rq3new_nodeNum/loc/def/occ_Result; get y_component_actual[]  ; use primaryFeature[] as x_primaryFeature[] to compute y_component_predicted[]
        // return x[], y_component_predicted[], y_component_actual[] ;  need to output to excel
        /*
         * MSE = average(Math.power(y_component_actual[] - y_component_predicted[], 2))
         * MAE = average(Math.abs(y_component_actual[] - y_component_predicted[]))
         * R2 = 1 - Math.sum(Math.power(y_component_actual[] - y_component_predicted[], 2)) / Math.sum(Math.power(y_component_actual[] - y_component_actual_average, 2))
         * */
        int size = 25;
        // first - get intArrayList
        double[] x_primaryFeature = new double[size];
        double[] y_component_actual = new double[size];
        double[] y_component_predicted = new double[size];
        int i = 0;
        for (RQResult rqResult : rqResults) {
            if (rqResult.getType() != implementation) continue;
            y_component_actual[i] = (double) rqResult.getComponentByType(component);
            x_primaryFeature[i] = (double)rqResult.getFeatureByType(primaryFeature);
            i++;
        }
        int length = y_component_actual.length;
        for (i = 0; i < length; i++) {
            y_component_predicted[i] = x_primaryFeature[i] * k + b;
        }
        if (dataset == Type.LOC){
            this.MAE_LOC = computeMAE(y_component_actual, y_component_predicted);
            this.MSE_LOC = computeMSE(y_component_actual, y_component_predicted);
            this.R2_LOC = computeR2(y_component_actual, y_component_predicted);
        }
        else if (dataset == Type.DEF){
            this.MAE_DEF = computeMAE(y_component_actual, y_component_predicted);
            this.MSE_DEF = computeMSE(y_component_actual, y_component_predicted);
            this.R2_DEF = computeR2(y_component_actual, y_component_predicted);
        }
        else if (dataset == Type.OCC){
            this.MAE_OCC = computeMAE(y_component_actual, y_component_predicted);
            this.MSE_OCC = computeMSE(y_component_actual, y_component_predicted);
            this.R2_OCC = computeR2(y_component_actual, y_component_predicted);
        }
        else if (dataset == Type.NODE){
            this.MAE_NODE = computeMAE(y_component_actual, y_component_predicted);
            this.MSE_NODE = computeMSE(y_component_actual, y_component_predicted);
            this.R2_NODE = computeR2(y_component_actual, y_component_predicted);
        }

        // Map<Type dataset, ArrayList<double[]> >
        /*
        the double[] in arrayList is:
        x_primaryFeature[]
        y_component_actual[]
        y_component_predicted[]
         */
        ArrayList<double[]> testResult = new ArrayList<>();
        testResult.add(x_primaryFeature);
        testResult.add(y_component_actual);
        testResult.add(y_component_predicted);
        return testResult;
    }
    public ArrayList<Double> getMetrics(){
        ArrayList<Double> metrics = new ArrayList<>();
        metrics.add(MSE_LOC);
        metrics.add(MAE_LOC);
        metrics.add(R2_LOC);
        metrics.add(MSE_DEF);
        metrics.add(MAE_DEF);
        metrics.add(R2_DEF);
        metrics.add(MSE_OCC);
        metrics.add(MAE_OCC);
        metrics.add(R2_OCC);
        metrics.add(MSE_NODE);
        metrics.add(MAE_NODE);
        metrics.add(R2_NODE);
        return metrics;
    }

    public double[] integerListToDoubleArray(ArrayList<Integer> integerList) {
        double[] doubleArray = new double[integerList.size()];
        for (int i = 0; i < integerList.size(); i++) {
            doubleArray[i] = integerList.get(i);
        }
        return doubleArray;
    }

    //计算数列均值
    public double calculateMean(double[] arr) {
        double sum = 0;
        for (double v : arr) {
            sum += v;
        }
        return sum / arr.length;
    }
    //计算协方差
    public double calculateCovariance() {

        //计算自变量(x)和因变量(y)的均值
        double xMean = calculateMean(x);
        double yMean = calculateMean(y);

        double covariance = 0;
        for (int i = 0; i < x.length; i++) {
            //对每个数据点，分别减去自变量(x)和因变量(y)的均值，得到差值
            //将这些差值相乘并求和
            covariance += (x[i] - xMean) * (y[i] - yMean);
        }

        //最后除以数据点的数量
        return covariance / x.length;
    }

    //计算方差
    public double calculateVariance() {

        //计算自变量(x)和因变量(y)的均值
        double xMean = calculateMean(x);

        //对每个数据点，计算其与均值的差的平方，并将所有这些差的平方加和
        double variance = 0;
        for (double v : x) {
            variance += Math.pow(v - xMean, 2);
        }

        //除以数据点的数量
        return variance / x.length;
    }

    //计算斜率
    public double calculateSlope() {
        return calculateCovariance() / calculateVariance();
    }

    //计算截距
    public double calculateIntercept() {
        double slope = calculateSlope();
        double xMean = calculateMean(x);
        double yMean = calculateMean(y);
        return yMean - slope * xMean;
    }

    //一元线性回归预测模型
    public double predict(double inputX) {
        double slope = calculateSlope();
        double intercept = calculateIntercept();
        double predictedY = slope * inputX + intercept;
        return predictedY;
    }

    @Override
    public String toString() {
        return "linearRegression: "+ name + "{" +
                "k='" + k + '\'' +
                ", b=" + b + '\'' +
                '}';
    }

    public double computeMAE(double[] y_actual, double [] y_predicted) {
        double sum = 0.0;
        for (int i = 0; i < y_actual.length; i++) {
            sum += Math.abs(y_actual[i] - y_predicted[i]);
        }
        return sum / y_actual.length;
    }

    public double computeMSE(double[] y_actual, double [] y_predicted){
        double sum = 0.0;
        for (int i = 0; i < y_actual.length; i++) {
            sum += Math.pow(y_actual[i] - y_predicted[i],2);
        }
        return sum / y_actual.length;
    }

    public double computeR2(double[] y_actual, double [] y_predicted){
        double sum1 = 0.0;
        double sum2 = 0.0;
        double meanY = calculateMean(y_actual);
        for (int i = 0; i < y_actual.length; i++) {
            sum1 += Math.pow(y_actual[i] - y_predicted[i],2);
            sum2 += Math.pow(y_actual[i] - meanY,2);
        }
        return 1 - sum1/sum2;
    }

}
