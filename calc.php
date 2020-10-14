<?
function checkPost($post)
{
    if ($post['summ'] < 1000 or $post['summ'] > 3000000) {
        return false;
    }
    if ($post['summ-add'] < 1000 or $post['summ-add'] > 3000000) {
        return false;
    }
    if (!is_Date($post['date'])) {
        return false;
    }
    return true;
}

function is_Date($str)
{
    return is_numeric(strtotime($str));
}

function calc($post)
{
    if (!checkPost($post)) {
        return 'Ошибка';
    }
    $summn = 0;
    $period = $post['period'] * 12;
    $pre_summ = $post['summ'];
    $date = date('Y-m-d', strtotime($post['date']));

    if ($post['calc__radio'] == 'no') {
        $summ_add = 0;
    } else {
        $summ_add = $post['summ-add'];
    }

    for ($i = 1; $i < $period + 1; $i++) {
        $date = date("Y-m-d", strtotime("+1 month", strtotime($date)));
        $daysn = cal_days_in_month(CAL_GREGORIAN, explode('-', $date)[1], explode('-', $date)[0]);
        $daysy = $date ? 366 : 365;

        $summn = $pre_summ +  $summ_add + $pre_summ * $daysn * (0.1 / $daysy);
        $pre_summ = $summn;
    }

    return round($summn, 2) . ' руб';
}

echo calc($_POST);
?>