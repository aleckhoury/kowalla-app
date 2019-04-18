<template>
    <div>
        <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span><b>@Kowalla</b></span>
                <span class="icon is-medium">
                                            <fa icon="angle-down" />
                                        </span>
            </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <a href="#" class="dropdown-item">
                    Dropdown item
                </a>
                <a class="dropdown-item">
                    Other dropdown item
                </a>
                <a href="#" class="dropdown-item">
                    Active dropdown item
                </a>
                <a href="#" class="dropdown-item">
                    Other dropdown item
                </a>
                <a href="#" class="dropdown-item">
                    With a divider
                </a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "dropdown"
  };
</script>

<style scoped>

</style>